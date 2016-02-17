## <%= ctx.name %>

---

<%= ctx.description %>

## 目录结构

```
.
├── favicon.ico  ---------------------- 页面图标
├── gulpfile.js  ---------------------- gulp入口文件
├── index.html  ----------------------- html入口文件
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
└── src  ------------------------------ 源码目录
    ├── app  -------------------------- 项目级代码
    │   ├── app.js  ------------------- 项目级脚本逻辑（主要是路由）
    │   ├── app.styl  ----------------- 全局样式
    │   ├── dbFactory.js  ------------- DB实例的工厂类
    │   └── db.js  -------------------- 在此创建DB实例
    ├── i18n  ------------------------- 国际化文案资源文件
    │   ├── en.json
    │   ├── manifest.json  ------------ 国际化资源映射配置
    │   └── zh-cn.json
    ├── images  ----------------------- 图片资源目录
    ├── lib  -------------------------- 外部类库目录
    │   ├── tingle.css
    │   ├── tingle.js  ---------------- 一个大而全的Tingle订制版，未压缩
    │   ├── tingle.js.map
    │   └── windvane.js  -------------- Native通信封装
    ├── pages  ------------------------ 页面集合目录
    │   ├── demo  --------------------- 某一个页面
    │   │   ├── actions.js  ----------- 该页面的事件集合
    │   │   ├── index.js  ------------- 页面入口文件
    │   │   ├── PageDemo.js  ---------- 页面视图逻辑
    │   │   ├── PageDemo.styl  -------- 页面样式
    │   │   └── store.js  ------------- 页面数据逻辑
    │   └── home  --------------------- 另一个页面
    │       ├── index.js
    │       ├── PageHome.js
    │       └── PageHome.styl
    ├── svg  -------------------------- 图标集合目录
    │   ├── custom  ------------------- 自定义图标目录
    │   │   └── icon.svg  ------------- 一个自定义svg图标
    │   └── tingle  ------------------- Tingle库自带的图标目录
    └── util  ------------------------- 工具包集合
        └── log.js  ------------------- 日志和监控
```

## 环境准备

具体请参考[这里](http://ux.alibaba.net/products/nowa.html)

环境准备妥当之后，把项目clone下来，切换到对应分支。安装项目依赖：

```
tnpm install -d
```

即可开始开发。

## 常用命令

- 启动调试服务器

```
gulp server
```

> 上面的命令会自动运行浏览器，并将脚手架的`home page`页面打开。此时，项目`src`目录下的任何`js`文件和`styl`文件的变化，都会触发整个项目的实时构建，而且浏览器也会自动刷新。

- 本地打包压缩

```
gulp
```

- 更多git命令

[Git发布操作流程和日常使用技巧](http://ux.alibaba.net/docs/git-publish.html)

## CSS约定

- [tingle style reset](http://gitlab.alibaba-inc.com/alinwmobile/tingle-style/raw/master/doc/tingle-style-reset-doc.html)
- [tingle style flexbox](http://gitlab.alibaba-inc.com/alinwmobile/tingle-style/raw/master/doc/tingle-style-flexbox-doc.html)
- [tingle style util](http://gitlab.alibaba-inc.com/alinwmobile/tingle-style/raw/master/doc/tingle-style-util-doc.html)
- CSS中图片资源如果是以`#datauri`结尾的话（例如`background: url(../images/icon12.png#datauri);`）会在打包时转换成datauri的形式。


## 外部工具

脚手架默认引入了以下外部工具库：

| 类库 | 全局名称 |
| ---- | ------ |
| React |React |
| React Router | ReactRouter |
| underscore | _ |
| zepto | $ |
| FastClick | FastClick |

> [React](http://reactjs.cn/) 和 [Refulx](https://github.com/reflux/refluxjs) 的使用，请参考各自的官方文档。

## Tingle模块

Tingle移动套件是基于React的H5解决方案，包括移动基础开发框架和样式、以及开发工具。还有丰富的移动端组件，比如button、dialog、slot、picker、tab等等。

脚手架已将一个大而全的 tingle 订制版引入到 lib 目录下，如果需要订制加载，请参考[这里](http://gitlab.alibaba-inc.com/alinwmobile/tingle/tree/master)。

## 增加新页面

请仿照demo或者home创建新页面，然后在`app/app.js`中增加路由。

## 国际化解决方案

`src/i18n`目录为国际化文案资源文件存放目录，其中manifest.json为资源映射配置文件，不同的语言会通过mappings属性映射到同目录下不同的json文件，`default_locale`定义了默认的语言。例如：

```
{
    "default_locale": "zh-cn",
    "mappings": {
        "zh-cn": "zh-cn.json",
        "en": "en.json",
        "zh-tw": "zh-cn.json"
    }
}
```

`index.html`中通过`locale`变量指定当前使用语言，如果不指定的话，将会使用默认语言。

可以在启动本地调试服务器时，通过`--locale <locale>`参数覆盖manifest.json中的默认语言配置。

js文件中可使用全局方法 `__i18n__("key"[, argv1[, argv2...]])` 来注入国际化文案。首先会找到对应的语言资源文件，然后通过key对应到文案模板。如果文案中有`{0}{1}`变量，将使用argvX参数进行替换。注意：国际化替换是在编译时进行，因此有一些约定：

- key值必须是常量
- argv可以为常量或者变量，但不能包含执行函数

> OK

```
__i18n__("key")
__i18n__("key", "abc", name, name.abc)
```

> NOT OK

```
__i18n__(key)
__i18n__("key", func(name))
```

## 项目中使用图标

项目中使用[tingle-icon](http://gitlab.alibaba-inc.com/alinwmobile/tingle-icon/tree/master)提供图标解决方案。可将图标（icon.svg）拷贝到`src/svg/custom`目录下，然后在需要的地方使用`<Icon id="icon"/>`即可（id和文件名一致）。

## 数据层和模拟数据解决方案

- TODO

## 其他

- 建议使用[es6](http://es6.ruanyifeng.com/)进行编码。
