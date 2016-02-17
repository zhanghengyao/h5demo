var DBF = require('./dbFactory');

var isDailyEnv = ['localhost'].indexOf(location.hostname) > -1;
var isLocalDev = !!location.port;

// 设置全局的`url`前缀
var urlPrefixForLocal = location.protocol + '//' + location.host;
// var urlPrefixForLocal = '//vacation.alibaba.net'; // 假期测试环境
if (isLocalDev || isDailyEnv) {
  DBF.set('urlPrefix', urlPrefixForLocal);
} else {
  DBF.set('urlPrefix', '/ehr');
}

/**
 * For Insurance Project DB Services
 */

// MockProxy mock 数据服务器代理，以跨过同源检测
DBF.set('mockProxy', function (mockUrl) {
  return '/mock?url=' + mockUrl
});

// 测试用, 可以扩展多个方法
DBF.create('Test', {
  get: {
    type: 'GET',
    // jsonp: true,
    url: '/ajax-data/data.json'
    // mockUrl: urlPrefixForLocal + '/ajax-data/data.json'
  }
})


module.exports = DBF.context;
