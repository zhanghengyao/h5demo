var fs = require('fs');

// https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-webpack/
var webpack = require('webpack');

// https://www.npmjs.com/package/gulp-watch/
var watch = require('gulp-watch');

// https://github.com/terinjokes/gulp-uglify
var uglify = require('gulp-uglify');

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// https://github.com/stevelacy/gulp-stylus
var stylus = require('gulp-stylus');

// https://github.com/floridoo/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// https://www.npmjs.com/package/gulp-concat/
var concat = require('gulp-concat');

// https://www.npmjs.com/package/gulp-cssimport/
var cssimport = require('gulp-cssimport');

// http://www.npmjs.com/package/gulp-css-globbing/
var cssGlobbing = require('gulp-css-globbing');

// https://www.npmjs.com/package/gulp-cssmin
var cssmin = require('gulp-cssmin');

// https://www.npmjs.com/package/gulp-just-replace/
var replace = require('gulp-just-replace');

// https://www.npmjs.com/package/gulp-rename/
var rename = require('gulp-rename');

// https://www.npmjs.com/package/yargs
var argvs = require('yargs').argv;

// https://www.npmjs.com/package/url
var url = require('url')

// https://www.npmjs.com/package/request
var request = require('request');

// https://www.npmjs.com/package/del
var del = require('del');

// https://www.npmjs.com/package/merge-stream
var merge = require('merge-stream');

// https://www.npmjs.com/package/gulp-base64
var base64 = require('gulp-base64');

// make inline svg
var gulpUniqueFile = require('gulp-unique-files');
var pathMap = require('gulp-pathmap');
var through = require('through2');
var svgSymbols = require('gulp-svg-symbols');
var injectStr  = require('gulp-inject-string');
var removeHtml = require('gulp-html-remove');

var pkg = require('./package.json');

// 指定语言的 webpack 打包操作
gulp.task('pack', function(cb) {
    webpack({
        // 入口文件
        entry: {
            app: './src/app/app.js'
        },
        // 输出文件的配置
        output: {
            path: './dist',
            filename: 'app.js',
            sourceMapFilename: 'app.js.map'
        },
        // 生成sourcemap文件
        devtool: '#source-map',
        resolve: {
            alias: {}
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules|index|action/,
                    loader: 'babel-loader?stage=1'
                }
            ]
        }
    }, function (err, stats) {
        console.log('webpack log:' + stats);
        if (stats.hasErrors()) {
            // 异常日志打印到屏幕
            fs.writeFileSync('./dist/app.js', [
                'document.body.innerHTML="<pre>',
                stats.toJson().errors[0].replace(/[\n\r]/g, '<br>').replace(/\[\d+m/g, '').replace(/"/g, '\\"'),
                '</pre>";',
                'document.body.firstChild.style.fontFamily="monospace";',
                'document.body.firstChild.style.lineHeight="1.5em";',
                'document.body.firstChild.style.margin="1em";',
            ].join(''));
        }
        cb();
    });
});

// 压缩应用的脚本
gulp.task('jsmin', ['pack'], function() {
    del.sync('./dist/app.js.map');
    return gulp.src('./dist/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('stylus', function() {
    return gulp.src('./src/**/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
});

// import.css 生成
gulp.task('import_css', ['stylus'], function() {
    fs.writeFileSync('./src/app.css', [
        '@import url(app/app.css);',
        '@import url(components/**/*.css);',
        '@import url(pages/**/*.css);'
    ].join('\n'));
    return gulp.src('./src/app.css')
        .pipe(cssGlobbing())
        .pipe(gulp.dest('./src'));
});

// 提取css文件的import的内容 && 合并文件
gulp.task('css', ['import_css', 'copy_img'], function() {
    return gulp.src('./src/app.css')
        .pipe(cssimport({}))
        .pipe(concat('app.css'))
        .pipe(replace(/[\.\/]+\/images\//g, './images/'))
        .pipe(base64({
            baseDir: './dist',
            extensions: [
                /#datauri['"]?$/i
            ]
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_img', function() {
    return gulp.src([
        './src/images/*',
        '!./src/images/README.md'
    ]).pipe(gulp.dest('./dist/images'));
});

// 命名方式是 xxx.svg ，会把fill都干掉
// 命名方式是 xxx.color.svg,  会保留svg中的颜色
function svgColorFilter() {
    return through.obj(function(file, enc, cb) {

        // console.log(file.path + ':\n');
        if (!!file.path.match(/\.color\.svg$/)) {
            console.log('file.path');
            file.path = file.path.replace(/\.color\.svg$/, '.svg');
        } else {
            var fileContent = file.contents.toString();
            // console.log(fileContent.match(/\sfill="[^"]*\"\s?/g));
            file.contents = new Buffer(fileContent.replace(/\sfill="[^"]*\"\s?/g, ' '));
        }

        this.push(file);
        cb();
    });
}

gulp.task('svg_sprite', function () {
    return gulp.src('./src/svg/**/*.svg')
        .pipe(pathMap('%f'))
        .pipe(gulpUniqueFile())
        .pipe(svgColorFilter())
        .pipe(svgSymbols({
            templates: ['default-svg']
        }))
        .pipe(gulp.dest('./dist'));
});

// 将svg插入到html页面
gulp.task('svg_inject', ['svg_sprite'], function () {
    var svg = fs.readFileSync('./dist/svg-symbols.svg', 'utf-8');
    del.sync('./dist/svg-symbols.svg');
    return gulp.src('index.html')
        .pipe(removeHtml({ attrs : { 'xmlns' : ['http://www.w3.org/2000/svg'] }}))
        .pipe(injectStr.before('</body>', svg))
        .pipe(gulp.dest('.'));
});

// HTML 压缩
gulp.task('html_compress', ['svg_inject'], function() {
    return gulp.src('./index.html')
        .pipe(replace([
            {
                search: /<!\-\-.+\-\->/g,
                replacement: ''
            },
            {
                search: /\s+/g,
                replacement: ' '
            },
            {
                search: /__VERSION__/g,
                replacement: pkg.version
            }
        ]))
        .pipe(gulp.dest('./dist'));
});

// 清理临时文件
gulp.task('clean', function(cb) {
    del([
        './dist',
        './src/**/*.css',
        './src/**/*.map'
    ], cb);
});

gulp.task('reload_by_js', ['pack'], function () {
    reload();
});

gulp.task('reload_by_styl', ['import_css'], function () {
    reload();
});

gulp.task('reload_by_svg', ['svg_inject'], function () {
    reload();
});

// watch files for changes and reload
gulp.task('watch', ['pack', 'import_css', 'svg_inject'], function() {

    // 浏览器监听
    browserSync({
        server: {
            baseDir: './',
            middleware: function(req, res, next) {
                if (req.url.indexOf('/mock') != -1) {
                    var query = url.parse(req.url, true).query
                    request({
                        uri: query.url,
                        qs: query
                    }, function(err, response, body) {
                        res.setHeader('Connect-Type', 'application/json;charset=UTF-8');
                        res.end(body);
                        next();
                    });
                }
                else {
                    next();
                }
            }
        }
    });

    // 监听脚本的变化
    gulp.watch([
        './src/**/*.js',
    ], ['reload_by_js']);

    // 监听样式的变化
    gulp.watch([
        './src/**/*.styl'
    ], ['reload_by_styl']);

    // 监听图标的变化
    gulp.watch([
        'src/svg/**/*.svg'
    ], ['reload_by_svg']);
});

// 启动调试服务器
gulp.task('server', ['watch']);
gulp.task('d', ['watch']);

gulp.task('default', [
    'jsmin',
    'css',
    'html_compress'
]);

