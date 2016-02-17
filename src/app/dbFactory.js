/**
 * 目前该项目只支持创建一个DB上下文
 * 即所有的DB实例都保存在`DBFactory.context`下
 *
 * TODO 后续增加对复杂项目的支持，允许同时创建多个`DBFactory.context`，比如
 *      一个模块对应一个`DB context`
 *      DBFactory.createContext('Xxx').create('Xxx', methods)

 DBF.create('Foo', {
    get: {
        type: 'POST', //当`type`为`POST`或`GET`时，`dataType`默认为`json`
        ...
    }
 });
 */
var Q = require('q');
var Dialog = Tingle.Dialog;

var DBFactory = {
  __: {},
  set: function (key, value) {
    this.__[key] = value;
  },
  get: function (key) {
    return this.__[key];
  },
  create: function (name, methods) {
    // 禁止创建重名的DB实例
    if (this.context[name]) {
      console.warn('DB: "' + name + '" is existed! ');
      return;
    }
    return this.context[name] = new DB(name, methods);
  },
  // 存储db实例
  context: {
    link: function (data) {
      DBFactory.context.Data = data;
    },
    // 占位 禁止覆盖
    Data: {}
  }
};

/**
 * 如果浏览器`url`中包含`m=1`的`search`参数，则强制使用`mockUrl`
 */
var isGlobalForceMock = !!location.search.match(/\bm=1\b/);

function DB(DBName, methods) {
  var t = this;
  t.cache = {};
  $.each(methods, function (method, config) {

    if (typeof config === 'function') {
      t[method] = config;
      return;
    }

    t[method] = function (query) {
      var cfg = {};

      cfg.method = method;

      cfg.DBName = DBName;

      cfg.mockUrl = config.mockUrl;

      // 如果设置了`mock`代理
      if (cfg.mockUrl && typeof DBFactory.__.mockProxy === 'function') {
        cfg.mockUrl = DBFactory.__.mockProxy(cfg.mockUrl);
      }

      cfg.mockForce = typeof config.mockForce === 'boolean' ? config.mockForce : false;

      cfg.query = $.extend({}, config.query || {}, query || {});

      cfg.isMock = isGlobalForceMock === false && cfg.mockForce === false && config.url
        ? false : true;

      t.urlPrefix = DBFactory.get('urlPrefix') || '';

      cfg.url = cfg.isMock ? cfg.mockUrl : (t.getUrl(config.url) || cfg.mockUrl);

      cfg.parseResp = config.parseResp || function (r) {
          return r
        };

      // 是否是全局只获取一次
      cfg.once = typeof config.once === 'boolean' ? config.once : false;

      // 数据缓存，如果`once`设置为true，则在第二次请求的时候直接返回改缓存数据。
      t.cache[method] = t.cache[method] || null;

      cfg.jsonp = config.jsonp || false;
      cfg.type = config.type || 'POST';
      return request(cfg, t);
    }

    if (config.test) {
      console.log('_____【 ' + DBName + '.' + method + '() 】_____');
      t[method]().then(function (data) {
        console.log(data);
      });
    }

  })
}

$.extend(DB.prototype, {
  /**
   * 获取正式接口的完整`url`
   * 如果通过`DB.set('urlPrefix', 'https://xxx')`设置了全局`url`的前缀，则执行补全
   */
  getUrl: function (url) {
    if (this.urlPrefix && url.indexOf('http') !== 0 && url.indexOf('//') !== 0) {
      return this.urlPrefix + url;
    } else {
      return url;
    }
  }
});

function request(cfg, db) {
  var defer = Q.defer();

  // 调试使用 在哪个DB上调试
  // if (cfg.DBName == 'Order') {
  //     debugger;
  // }

  if (cfg.once && db.cache[cfg.method]) {
    defer.resolve(db.cache[cfg.method]);
  } else {
    var query;

    var mergeQuery = {};
    mergeQuery['__' + cfg.DBName + '.' + cfg.method + '()__'] = '';
    if (cfg.isMock) {
      mergeQuery.m = 1;
    }

    query = $.extend({}, mergeQuery, cfg.query);

    var ajaxOptions = {
      url: cfg.url,
      data: query,
      success: function (resp) {
        //if (cfg.isMock) {
        // 需要缓存数据的情况
        if (resp.success) {
          var resp = cfg.parseResp(resp.content);
          cfg.once && (db.cache[cfg.method] = resp);
          defer.resolve(resp);
        } else {
          defer.reject({
            msg: 'DB mock error: ' + cfg.url
          });
          Dialog.alert({
            children: resp.errorMsg
          });
        }
      },
      error: function () {
        Dialog.alert({
          children: 'DB error: ' + cfg.url
        });
      }
    };

    if (cfg.jsonp === true) {
      ajaxOptions.dataType = 'jsonp';
    } else {
      ajaxOptions.dataType = 'json';
      ajaxOptions.type = cfg.type;
      // dip平台不支持GET以外的类型
      if (cfg.isMock) {
        ajaxOptions.type = 'GET';
      }
    }


    $.ajax(ajaxOptions);
  }

  return defer.promise;
}

module.exports = DBFactory;
