/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	window.FastClick && FastClick.attach(document.body);
	
	var Router = ReactRouter;
	
	// 避免内外webview报错
	window.AliworkWebView_WillGoBack = function () {};
	
	var NotFoundRoute = Router.NotFoundRoute;
	var DefaultRoute = Router.DefaultRoute;
	var Route = Router.Route;
	var RouteHandler = Router.RouteHandler;
	
	var PageHome = __webpack_require__(1);
	var PageForm = __webpack_require__(2);
	var PageResult = __webpack_require__(3);
	var PageList = __webpack_require__(4);
	var PageAbout = __webpack_require__(5);
	//let PageMotorCycle = require('../pages/motorcycle');
	var PageNative = __webpack_require__(6);
	var PageOther = __webpack_require__(7);
	var PageOtherComponents = __webpack_require__(8);
	var PageBlackboard = __webpack_require__(9);
	
	var PageCalendar = __webpack_require__(10);
	var PageIcon = __webpack_require__(11);
	var PageLayout = __webpack_require__(12);
	var PageButton = __webpack_require__(13);
	var PageDialog = __webpack_require__(14);
	var PageTip = __webpack_require__(15);
	var PageSlide = __webpack_require__(16);
	var PageProject = __webpack_require__(17);
	
	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(RouteHandler, null)
	      );
	    }
	  }]);
	
	  return App;
	})(React.Component);
	
	var routes = React.createElement(
	  Route,
	  { name: 'app', path: '/', handler: App },
	  React.createElement(DefaultRoute, { handler: PageHome }),
	  '// ',
	  React.createElement(NotFoundRoute, { handler: PageHome }),
	  '// ',
	  React.createElement(Route, { name: 'form', handler: PageForm }),
	  '// ',
	  React.createElement(Route, { name: 'result', handler: PageResult }),
	  '// ',
	  React.createElement(Route, { name: 'list', handler: PageAbout }),
	  React.createElement(Route, { name: 'about', handler: PageAbout }),
	  React.createElement(Route, { name: 'native', handler: PageNative }),
	  React.createElement(Route, { name: 'calendar', handler: PageCalendar }),
	  React.createElement(Route, { name: 'icon', handler: PageIcon }),
	  React.createElement(Route, { name: 'layout', handler: PageLayout }),
	  React.createElement(Route, { name: 'project', handler: PageProject }),
	  React.createElement(Route, { name: 'blackboard', handler: PageBlackboard }),
	  React.createElement(Route, { name: 'other-components', handler: PageOtherComponents }),
	  React.createElement(Route, { name: 'button', handler: PageButton }),
	  React.createElement(Route, { name: 'dialog', handler: PageDialog }),
	  React.createElement(Route, { name: 'tip', handler: PageTip }),
	  React.createElement(Route, { name: 'slide', handler: PageSlide })
	);
	
	Router.run(routes, function (Handler, state) {
	  React.render(React.createElement(Handler, null), document.getElementById('App'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(21);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var Field = _Tingle.Field;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	  }
	
	  _createClass(Page, [{
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          { className: "tNotice" },
	          "公告信息公告信息公告信息公告信息公告信息"
	        ),
	        React.createElement(
	          "div",
	          { className: "tMT10 tMB20" },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14], className: "tReadOnly" },
	              React.createElement(
	                Field,
	                { label: "来访时间" },
	                "2015-09-01"
	              ),
	              React.createElement(
	                Field,
	                { label: "结束时间" },
	                "2015-09-06"
	              ),
	              React.createElement(
	                Field,
	                { label: "来访目的" },
	                "合作伙伴"
	              ),
	              React.createElement(
	                Field,
	                { label: "访客姓名" },
	                "张三丰"
	              ),
	              React.createElement(
	                Field,
	                { label: "访客手机" },
	                "13000000000"
	              ),
	              React.createElement(
	                Field,
	                { label: "园区及楼号" },
	                "西溪园区/3号楼"
	              ),
	              React.createElement(
	                Field,
	                { label: "来访人数" },
	                "3人"
	              ),
	              React.createElement(
	                Field,
	                { label: "进入工作区" },
	                "否"
	              ),
	              React.createElement(
	                Field,
	                { label: "WIFI" },
	                "是"
	              ),
	              React.createElement(
	                Field,
	                { label: "备注", multiLine: true },
	                React.createElement(
	                  "div",
	                  { className: "tPT10 tPB10 tLH1_5" },
	                  "没有备注",
	                  React.createElement("br", null),
	                  "没有备注"
	                )
	              ),
	              React.createElement(
	                Field,
	                { label: "证明" },
	                React.createElement("img", { src: "http://gtms01.alicdn.com/tps/i1/TB1Fhk7IVXXXXbmXpXX8X4g_XXX_40x40.jpg", alt: "",
	                  className: "tFR" })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	module.exports = Page;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Slide = _Tingle.Slide;
	var Icon = _Tingle.Icon;
	
	var Grid = __webpack_require__(35);
	
	var isSupportWebp = __webpack_require__(41).isSupportWebp();
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	    this.tingleIntroBgColors = ['#de3e3e', // 红
	    '#FFB600', // 黄
	    '#4E9C0B', // 绿
	    '#3053AB'];
	    // 蓝
	    this.state = {
	      tingleIntroBgColorIndex: 0,
	      icons: [{
	        text: '列表',
	        icon: 'show-list',
	        route: 'list'
	      }, {
	        text: '表单',
	        icon: 'show-form',
	        route: 'form'
	      }, {
	        text: '图表',
	        icon: 'show-charts',
	        route: 'blackboard'
	      }, {
	        text: '布局',
	        icon: 'show-layout',
	        route: 'layout'
	      }, {
	        text: '图标',
	        icon: 'show-icon',
	        route: 'icon'
	      }, {
	        text: '原生',
	        icon: 'show-native',
	        route: 'native'
	      }, {
	        text: '按钮',
	        icon: 'show-button',
	        route: 'button'
	      }, {
	        text: '幻灯片',
	        icon: 'show-slide',
	        route: 'slide'
	      }, {
	        text: '对话框',
	        icon: 'show-dialog',
	        route: 'dialog'
	      }, {
	        text: '日历',
	        icon: 'show-calendar',
	        route: 'calendar'
	      }, {
	        text: '其他',
	        icon: 'show-img-text',
	        route: 'other-components'
	      }, {
	        text: '源码',
	        icon: 'show-github',
	        route: 'github'
	      }, {
	        text: '关于',
	        icon: 'show-other',
	        route: 'other'
	      }, {
	        text: '反馈',
	        icon: 'show-feedback',
	        route: 'feedback'
	      }]
	    };
	  }
	
	  _createClass(Page, [{
	    key: 'getTingleBgColorIndex',
	    value: function getTingleBgColorIndex() {
	      var t = this;
	      var currentIndex = t.state.tingleIntroBgColorIndex;
	      var nextIndex = currentIndex === t.tingleIntroBgColors.length - 1 ? 0 : currentIndex + 1;
	      return nextIndex;
	    }
	  }, {
	    key: 'handleChangeColor',
	    value: function handleChangeColor() {
	      var t = this;
	      t.setState({
	        tingleIntroBgColorIndex: t.getTingleBgColorIndex()
	      });
	    }
	  }, {
	    key: 'handleRoute',
	    value: function handleRoute(route) {
	      var t = this;
	      switch (route) {
	        case "feedback":
	          WindVane.call('WVNative', 'sendPost', {
	            'bizType': 'Create', // 业务类型(Create, Forward, Comment)
	            'title': '发送内外新分享', // 大标题
	            'postScope': 'public', // public, private
	            'content': '#意见反馈# ', // 默认内容
	            'placeholderText': '请输入您要反馈给tingle小组的意见，或bug', // placeholder
	            'groupId': '17122'
	          }, function () {});
	          break;
	        case "other":
	          location.href = 'http://ux.alibaba.net/docs/tingle-getting-started.html';
	          break;
	        case "github":
	          location.href = 'https://github.com/tinglejs/';
	          break;
	        default:
	          t.transitionTo(route);
	          break;
	      }
	    }
	  }, {
	    key: 'handleSlideImgClick',
	    value: function handleSlideImgClick() {
	      location.href = "http://ux.alibaba.net/docs/tingle-getting-started.html";
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        'div',
	        { className: 'homePage' },
	        React.createElement(
	          Slide,
	          { className: 'homeSlide', showNav: true, auto: true },
	          React.createElement('img', { onClick: t.handleSlideImgClick.bind(t),
	            src: "https://gw.alicdn.com/tps/TB18IPLKFXXXXc9XFXXXXXXXXXX-1242-747.jpg_620x10000.jpg" + (isSupportWebp ? "_.webp" : "") }),
	          React.createElement(
	            'div',
	            { className: 'tFBH tFBAC tFBJC tingleIntro',
	              style: { backgroundColor: t.tingleIntroBgColors[t.state.tingleIntroBgColorIndex] },
	              onClick: t.handleChangeColor.bind(t) },
	            React.createElement(Icon, { id: 'tingle', className: 'tingleSvg' })
	          )
	        ),
	        React.createElement(
	          Grid,
	          { col: 3, className: 'tBCf' },
	          t.state.icons.map(function (item, index) {
	            return React.createElement(
	              'div',
	              { className: 'tFBV tFBAC tFBJC homeGridItem tTE', onClick: t.handleRoute.bind(t, item.route) },
	              React.createElement(
	                'div',
	                { className: 'homeGridIcon' },
	                React.createElement(Icon, { id: 'show-icon-bg', className: "iconBg iconColor" + index }),
	                React.createElement(Icon, { id: item.icon, className: 'iconIs' })
	              ),
	              React.createElement(
	                'div',
	                { className: 'tFC6 iconText' },
	                item.text
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var Tab = _Tingle.Tab;
	var Icon = _Tingle.Icon;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	  }
	
	  _createClass(Page, [{
	    key: "handleClick",
	    value: function handleClick() {
	      //location.hash = '/result';
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        Tab,
	        { className: "tPageList" },
	        React.createElement(
	          Tab.item,
	          { title: "贡献者" },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(Group.List, { lineIndent: 14, itemIndent: [14, 14] })
	          )
	        ),
	        React.createElement(
	          Tab.item,
	          { title: "参与者" },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(Group.List, { lineIndent: 14, itemIndent: [14, 14] })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	module.exports = Page;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var TextField = _Tingle.TextField;
	var TextareaField = _Tingle.TextareaField;
	var NumberField = _Tingle.NumberField;
	var Field = _Tingle.Field;
	var Icon = _Tingle.Icon;
	var SelectField = _Tingle.SelectField;
	var Button = _Tingle.Button;
	var Checkbox = _Tingle.Checkbox;
	var PhotoField = _Tingle.PhotoField;
	var Tip = _Tingle.Tip;
	var OnOffField = _Tingle.OnOffField;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	    var dates = SelectField.formatDataValue([[2015, 2016], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]]);
	    var relations = SelectField.formatDataValue(['朋友', '家人', '合作伙伴', '供应商']);
	    var buildings = SelectField.formatDataValue([['西溪', '黄龙', '龙章'], ['1号楼', '2号楼', '3号楼', '4号楼']]);
	    this.state = {
	      dates: dates.data,
	      relations: relations.data,
	      buildings: buildings.data,
	      required1: '',
	      required2: dates.value,
	      required3: dates.value,
	      required4: relations.value,
	      required5: '',
	      required6: '',
	      required7: buildings.value,
	      required8: '',
	      optional9: false,
	      optional10: true,
	      optional11: '',
	      disabled: true,
	      checked: true
	    };
	  }
	
	  _createClass(Page, [{
	    key: 'handleChange',
	    value: function handleChange(label, value) {
	      var t = this;
	      t.setState(_defineProperty({}, label, value), function () {
	        var disabled = false;
	        for (var key in t.state) {
	          if (/^required\d+$/.test(key) && !t.state[key]) {
	            disabled = true;
	            break;
	          }
	        }
	        if (!t.state.checked) {
	          disabled = true;
	        }
	        if (disabled !== t.state.disabled) {
	          t.setState({
	            disabled: disabled
	          });
	        }
	      });
	    }
	  }, {
	    key: 'formatDate',
	    value: function formatDate(values) {
	      return values.map(function (value) {
	        return value.text < 10 ? '0' + value.text : value.text;
	      }).join('-');
	    }
	  }, {
	    key: 'formatBuilding',
	    value: function formatBuilding(values) {
	      return values.map(function (value) {
	        return value.text;
	      }).join('/');
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      Tip.show({
	        icon: 'success',
	        text: '提交成功',
	        onHide: function onHide() {
	          location.hash = '/result';
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'tNotice tOmit' },
	          '10.1 - 10.8 园区封园，不接受入园申请，请提前做好准备。'
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            '必填'
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(TextField, { label: '来访单位', placeholder: '请输入', value: t.state.required1,
	              onChange: t.handleChange.bind(t, 'required1') }),
	            React.createElement(SelectField, { label: '来访时间', data: t.state.dates, value: t.state.required2,
	              formatter: t.formatDate.bind(t), onChange: t.handleChange.bind(t, 'required2') }),
	            React.createElement(SelectField, { label: '结束时间', data: t.state.dates, value: t.state.required3,
	              formatter: t.formatDate.bind(t), onChange: t.handleChange.bind(t, 'required3') }),
	            React.createElement(SelectField, { label: '来访目的', data: t.state.relations, value: t.state.required4,
	              onChange: t.handleChange.bind(t, 'required4') }),
	            React.createElement(TextField, { label: '访客姓名', placeholder: '请输入', value: t.state.required5,
	              onChange: t.handleChange.bind(t, 'required5') }),
	            React.createElement(NumberField, { label: '访客手机', placeholder: '请输入', value: t.state.required6,
	              onChange: t.handleChange.bind(t, 'required6') }),
	            React.createElement(SelectField, { label: '园区及楼号', data: t.state.buildings, value: t.state.required7,
	              formatter: t.formatBuilding.bind(t),
	              onChange: t.handleChange.bind(t, 'required7') }),
	            React.createElement(NumberField, { label: '来访人数', placeholder: '请输入', value: t.state.required8,
	              onChange: t.handleChange.bind(t, 'required8') }),
	            React.createElement(OnOffField, { label: '进入工作区', on: t.state.optional9,
	              onChange: t.handleChange.bind(t, 'optional9') }),
	            React.createElement(OnOffField, { label: 'WIFI', on: t.state.optional10,
	              onChange: t.handleChange.bind(t, 'optional10') })
	          )
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            '选填'
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(TextareaField, { label: '备注', placeholder: '请输入', value: t.state.optional11,
	              onChange: t.handleChange.bind(t, 'optional11') }),
	            React.createElement(PhotoField, { className: 'tField', label: '证明', icon: 'tingle-photo-field-camera' }),
	            React.createElement(
	              'div',
	              { className: 'tFBH tFBAC tFS14 tSelectField' },
	              React.createElement(
	                'div',
	                { className: 'tFB1 tPR tFC9 tFieldLabel', style: { whiteSpace: 'nowrap' } },
	                React.createElement(Checkbox, { className: 'tMR10', on: t.state.checked,
	                  onChange: t.handleChange.bind(t, 'checked') }),
	                '同意',
	                React.createElement(
	                  'a',
	                  { href: 'javascript:;' },
	                  '《阿里巴巴访客协议》'
	                )
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { style: { padding: '30px 15px' } },
	            React.createElement(
	              Button,
	              { type: 'primary', onClick: this.handleClick, disabled: t.state.disabled },
	              '提交'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	module.exports = Page;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _contributor = __webpack_require__(36);
	
	var _contributor2 = _interopRequireDefault(_contributor);
	
	var _projects = __webpack_require__(37);
	
	var _projects2 = _interopRequireDefault(_projects);
	
	var reactMixin = __webpack_require__(44);
	
	var AboutItem = __webpack_require__(38);
	var _Tingle = Tingle;
	var Tab = _Tingle.Tab;
	var Group = _Tingle.Group;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      item: _contributor2['default'],
	      projects: _projects2['default']
	    };
	  }
	
	  _createClass(Page, [{
	    key: 'render',
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        'div',
	        { className: 'page-about' },
	        React.createElement(
	          Tab,
	          { className: 'tPageList' },
	          React.createElement(
	            Tab.item,
	            { title: '贡献者' },
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              this.state.item.map(function (item) {
	                return React.createElement(AboutItem, { itemData: item });
	              })
	            )
	          ),
	          React.createElement(
	            Tab.item,
	            { title: '服务于项目' },
	            this.state.projects.map(function (item) {
	              return React.createElement(
	                Group,
	                { className: 'project-tingle' },
	                React.createElement(
	                  Group.Head,
	                  null,
	                  item.line
	                ),
	                React.createElement(
	                  Group.List,
	                  { lineIndent: 14, itemIndent: [14, 14] },
	                  item.projects.map(function (project) {
	                    return React.createElement(
	                      'span',
	                      null,
	                      project.name
	                    );
	                  })
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Slide = _Tingle.Slide;
	var Icon = _Tingle.Icon;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(Page, [{
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement("div", { className: "iconPage" });
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var Rate = _Tingle.Rate;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	
	    this.state = {
	      score: 3
	    };
	  }
	
	  _createClass(Page, [{
	    key: "handleChange",
	    value: function handleChange(currentScore) {
	      this.setState({
	        score: currentScore
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "Tingle.Rate"
	          ),
	          React.createElement(
	            Group.List,
	            { itemIndent: [14, 14], lineIndent: 14 },
	            React.createElement(
	              "div",
	              { className: "tFBH tFBAC tH44" },
	              React.createElement(
	                "div",
	                { className: "tFB1" },
	                "请给五星："
	              ),
	              React.createElement(Rate, { totalScore: 5, height: 20, gap: 15, score: t.state.score, onChange: t.handleChange.bind(t) })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: caoke
	 * @Date:   2015-08-28 13:24:25
	 * @Last Modified by:   caoke
	 * @Last Modified time: 2015-09-14 13:18:47
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var Button = _Tingle.Button;
	var Tip = _Tingle.Tip;
	var SelectField = _Tingle.SelectField;
	var NumberField = _Tingle.NumberField;
	
	var Module = (function (_React$Component) {
	  _inherits(Module, _React$Component);
	
	  function Module(props) {
	    _classCallCheck(this, Module);
	
	    _get(Object.getPrototypeOf(Module.prototype), 'constructor', this).call(this, props);
	    var formatDataValue = SelectField.formatDataValue(['HH:mm', 'yyyy-MM-dd', 'yyyy-MM-dd HH:mm:ss']);
	    var pickTypeDataValue = SelectField.formatDataValue([{
	      text: '时分选择',
	      value: 'time'
	    }, {
	      text: '年月日选择',
	      value: 'date'
	    }, {
	      text: '年月日+时分选择',
	      value: 'dateTime'
	    }]);
	    var singleDataValue = SelectField.formatDataValue([{
	      text: '多人模式',
	      value: 'false'
	    }, {
	      text: '单人模式',
	      value: 'true'
	    }]);
	    this.state = {
	      formatOptions: formatDataValue.data,
	      format: formatDataValue.value,
	      pickTypeOptions: pickTypeDataValue.data,
	      pickType: pickTypeDataValue.value,
	      singleOptions: singleDataValue.data,
	      single: singleDataValue.value,
	      picWidth: 20,
	      picHeight: 20,
	      profileId: '67732'
	    };
	  }
	
	  _createClass(Module, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var t = this;
	      if (!window.WindVane) {
	        Tip.show({
	          icon: 'error',
	          text: 'Please open this site in alinw webview.',
	          duration: 20000
	        });
	      }
	    }
	  }, {
	    key: 'handlerTimePickerClick',
	    value: function handlerTimePickerClick() {
	      var t = this;
	      WindVane.call('WVNative', 'timePicker', {
	        format: t.state.format[0].value, //yyyy-MM-dd 或 HH:mm 或yyyy-MM-dd HH:mm:ss
	        pickType: t.state.pickType[0].value //date(年月日选择) 或time（时分选择） 或dateTime(年月日+时分选择)
	      }, function (e) {
	        var timeMsg = React.findDOMNode(t.refs.timeMsg);
	        timeMsg.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handlerPersonPickerClick',
	    value: function handlerPersonPickerClick() {
	      var t = this;
	      WindVane.call('WVNative', 'peoplePicker', {
	        'single': t.state.single[0].value, //是否支持多选
	        'picWidth': t.state.picWidth, //人员头像的图片宽度，如果为0就返回原图
	        'picHeight': t.state.picHeight //人员头像的图片高度，如果为0就返回原图
	      }, function (e) {
	        var personMsg = React.findDOMNode(t.refs.personMsg);
	        personMsg.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handlerNetworkClick',
	    value: function handlerNetworkClick() {
	      var t = this;
	      WindVane.call('WVNative', 'getCurrentNetStatus', {}, function (e) {
	        var netMsg = React.findDOMNode(t.refs.netMsg);
	        netMsg.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handleBackClick',
	    value: function handleBackClick() {
	      WindVane.call('WVNative', 'nativeBack', {}, function () {});
	    }
	  }, {
	    key: 'handlerProfileClick',
	    value: function handlerProfileClick() {
	      var t = this;
	      WindVane.call('WVNative', 'showPersonProfile', {
	        'userId': t.state.profileId
	      }, function () {});
	    }
	  }, {
	    key: 'handlerSendMsgClick',
	    value: function handlerSendMsgClick() {
	      WindVane.call('WVNative', 'sendPost', {
	        'bizType': 'Create', // 业务类型(Create, Forward, Comment)
	        'title': '发送内外新分享', // 大标题
	        'postScope': 'public', // public, private
	        'content': '', // 默认内容
	        'placeholderText': '九神测试' // placeholder
	      }, function () {});
	    }
	  }, {
	    key: 'handlerCommentClick',
	    value: function handlerCommentClick() {
	      WindVane.call('WVNative', 'sendPost', {
	        'bizType': 'Comment', //业务类型(Create, Forward, Comment)
	        'postId': '4998623', //帖子id
	        'srcCommentId': '2595',
	        'content': 'xia dan', //帖子内容
	        'placeholderText': 'comment' //placeholder
	      }, function () {});
	    }
	  }, {
	    key: 'handlerForwardsClick',
	    value: function handlerForwardsClick() {
	      WindVane.call('WVNative', 'sendPost', {
	        'bizType': 'Forward', //业务类型(Create, Forward, Comment)
	        'groupId': '', //群id
	        'extraContent': { "postId": "4998627", "publisherId": "43957" }, // 转发的分享 id 和人的 id
	        'content': 'Dodd', //帖子内容
	        'placeholderText': 'forward' //placeholder
	      }, function () {});
	    }
	  }, {
	    key: 'handlerGetLocationClick',
	    value: function handlerGetLocationClick() {
	      var t = this;
	      WindVane.call('WVNative', 'getLocation', {
	        'enableHighAccuracy': false, // 是否开启高精确模式，然而好像没什么用
	        'address': false // 返回的 data 中是否包含 address 字段
	      }, function (e) {
	        var getLocationDone = React.findDOMNode(t.refs.getLocationDone);
	        getLocationDone.innerHTML = JSON.stringify(e);
	      }, function (e) {
	        var getLocationFail = React.findDOMNode(t.refs.getLocationFail);
	        getLocationFail.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handlerNativeCallClick',
	    value: function handlerNativeCallClick() {
	      WindVane.call('WVNative', 'nativeCall', {
	        'ios': {
	          'scheme': 'taobao://', // 唤醒的其他 app 的接口，如果没有相应的 app，则跳转至相应的 download Url
	          'downloadURL': '//m.taobao.com/channel/act/sale/tbdl1.html'
	        },
	        'android': {
	          'scheme': 'taobao://',
	          'downloadURL': '//m.taobao.com/channel/act/sale/tbdl1.html',
	          'pkg': 'com.taobao.taobao'
	        }
	      }, function (e) {});
	    }
	  }, {
	    key: 'handlerAttachmentClick',
	    value: function handlerAttachmentClick() {
	      WindVane.call('WVNative', 'openAttachment', {
	        'downloadUrl': 'https://a-work.alibaba-inc.com/asset/workflow/common/downloadAttachment.do?attachId=4612640877944832', // 必填，附件的链接
	        'fileName': 'test.msg', // 必填，文件的名字
	        'fileSize': 0, // 可选
	        'fileType': '' // 可选
	      }, function () {});
	    }
	  }, {
	    key: 'handlerVersionClick',
	    value: function handlerVersionClick() {
	      var t = this;
	      WindVane.call('WVNative', 'getVersion', {}, function (e) {
	        var msg = React.findDOMNode(t.refs.versionMsg);
	        msg.innerHTML = JSON.stringify(e);
	      }, function (e) {
	        var msg = React.findDOMNode(t.refs.versionMsg);
	        msg.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handlerGetLocationInParkClick',
	    value: function handlerGetLocationInParkClick() {
	      var t = this;
	      WindVane.call('WVNative', 'getLocationInPark', {}, function (e) {
	        var msg = React.findDOMNode(t.refs.getLocationInParkMsg);
	        msg.innerHTML = JSON.stringify(e);
	      }, function (e) {
	        var msg = React.findDOMNode(t.refs.getLocationInParkMsg);
	        msg.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handlerNavigateToClick',
	    value: function handlerNavigateToClick() {
	      var t = this;
	      WindVane.call('WVNative', 'navigateTo', {
	        'xCoord': 120.02357733161482, //double
	        'yCoord': 30.27921178524374, //double
	        'floor': 5, //int
	        'name': "jiushen\'s location"
	      }, function (e) {
	        var msg = React.findDOMNode(t.refs.navigateToMsg);
	        msg.innerHTML = JSON.stringify(e);
	      }, function (e) {
	        var msg = React.findDOMNode(t.refs.navigateToMsg);
	        msg.innerHTML = JSON.stringify(e);
	      });
	    }
	  }, {
	    key: 'handlerSelectChange',
	    value: function handlerSelectChange(k, v) {
	      this.setState(_defineProperty({}, k, v));
	    }
	  }, {
	    key: 'handlerAlertClick',
	    value: function handlerAlertClick() {
	      WindVane.call('WVUIDialog', 'alert', { "message": "我是内外弹窗", "okbutton": "确定" }, function (e) {
	        //nop callback
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        'div',
	        { className: 'tPageNative' },
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '选时间'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(SelectField, { label: '日期格式', data: t.state.formatOptions, value: t.state.format,
	                onChange: t.handlerSelectChange.bind(t, 'format') }),
	              React.createElement(SelectField, { label: '选择类型', data: t.state.pickTypeOptions, value: t.state.pickType,
	                onChange: t.handlerSelectChange.bind(t, 'pickType') }),
	              React.createElement(
	                'div',
	                { ref: 'timeMsg', className: 'tLH44 tFC6' },
	                '显示返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'timePicker', onClick: t.handlerTimePickerClick.bind(t) },
	              '选择时间'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '选人'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(SelectField, { label: '选人模式', data: t.state.singleOptions,
	                value: t.state.single,
	                onChange: t.handlerSelectChange.bind(t, 'single') }),
	              React.createElement(NumberField, { label: '图片宽度', value: t.state.picWidth, onChange: t.handlerSelectChange.bind(t, 'picWidth') }),
	              React.createElement(NumberField, { label: '图片高度', value: t.state.picHeight,
	                onChange: t.handlerSelectChange.bind(t, 'picHeight') }),
	              React.createElement(
	                'div',
	                { ref: 'personMsg', className: 'tLH44 tFC6' },
	                '显示返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'personPicker', onClick: t.handlerPersonPickerClick.bind(t) },
	              '选人'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '弹出消息'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'alert', onClick: t.handlerAlertClick.bind(t) },
	              '调用 Alert'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '查看网络状态'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(
	                'div',
	                { ref: 'netMsg', className: 'tLH44 tFC6' },
	                '显示返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'network', onClick: t.handlerNetworkClick.bind(t) },
	              '查看网络状态'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '回退'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'back', onClick: t.handleBackClick.bind(t) },
	              'WebView 回退'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '显示个人信息'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'profile', onClick: t.handlerProfileClick.bind(t) },
	              '显示个人信息'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '发消息'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'sendMsg', onClick: t.handlerSendMsgClick.bind(t) },
	              '发消息'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '发评论'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'comment', onClick: t.handlerCommentClick.bind(t) },
	              '发评论'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '内外转发'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'forwards', onClick: t.handlerForwardsClick.bind(t) },
	              '内外转发'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '获取位置'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(
	                'div',
	                { ref: 'getLocationDone', className: 'tLH44 tFC6' },
	                '显示成功返回的值'
	              ),
	              React.createElement(
	                'div',
	                { ref: 'getLocationFail', className: 'tLH44 tFC6' },
	                '显示失败返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'getLocation', onClick: t.handlerGetLocationClick.bind(t) },
	              '获取位置'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '唤醒其他app的接口'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'nativeCall', onClick: t.handlerNativeCallClick.bind(t) },
	              '唤醒淘宝 APP'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              'div',
	              { className: 'tLH44' },
	              '打开附件'
	            ),
	            React.createElement(
	              Button,
	              { ref: 'attachment', onClick: t.handlerAttachmentClick.bind(t) },
	              '打开附件'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '获取版本号'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(
	                'div',
	                { ref: 'versionMsg', className: 'tLH44 tFC6' },
	                '显示返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'version', onClick: t.handlerVersionClick.bind(t) },
	              '获取版本号'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '显示在园区中的位置'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(
	                'div',
	                { ref: 'getLocationInParkMsg', className: 'tLH44 tFC6' },
	                '显示返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'getLocationInPark', onClick: t.handlerGetLocationInParkClick.bind(t) },
	              '显示在园区中的位置'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'feature-block' },
	          React.createElement(
	            Group,
	            null,
	            React.createElement(
	              Group.Head,
	              null,
	              '打开地图，并定位到指定位置'
	            ),
	            React.createElement(
	              Group.List,
	              { lineIndent: 14, itemIndent: [14, 14] },
	              React.createElement(
	                'div',
	                { ref: 'navigateToMsg', className: 'tLH44 tFC6' },
	                '显示返回的值'
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'button-wrapper' },
	            React.createElement(
	              Button,
	              { ref: 'navigateTo', onClick: t.handlerNavigateToClick.bind(t) },
	              '打开地图，并定位到指定位置'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Module;
	})(React.Component);
	
	module.exports = Module;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _blackboardOrganization = __webpack_require__(39);
	
	var _blackboardOrganization2 = _interopRequireDefault(_blackboardOrganization);
	
	var _blackboardTable = __webpack_require__(40);
	
	var _blackboardTable2 = _interopRequireDefault(_blackboardTable);
	
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	
	Chart.defaults.global.responsive = true;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	    this.state = {
	      personCount: 628,
	      organizationCount: 489,
	      trendData: {
	        labels: ["2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "当前"],
	        datasets: [{
	          label: "My First dataset",
	          fillColor: "rgba(70, 180, 241,0.2)",
	          strokeColor: "rgba(70, 180, 241,1)",
	          pointColor: "rgba(70, 180, 241,1)",
	          pointStrokeColor: "#fff",
	          pointHighlightFill: "#fff",
	          pointHighlightStroke: "rgba(220,220,220,1)",
	          data: [565, 559, 580, 581, 606, 612, 628]
	        }]
	      },
	      inOutData: [[{ title: "最近7天" }, { title: 8, strong: true }, { title: 0, highlight: true }], [{ title: "本月" }, { title: 27, strong: true }, { title: 2, highlight: true }], [{ title: "本年" }, { title: 106, strong: true }, { title: 11, highlight: true }]],
	      hrData: [[{ title: "今日员工生日提示" }, { title: 2, highlight: true }], [{ title: "未来7天员工生日提示" }, { title: 9, strong: true }], [{ title: "已过期员工转正提醒" }, { title: 41, highlight: true }], [{ title: "未来7天待转正员工提示" }, { title: 0, strong: true }]]
	    };
	  }
	
	  _createClass(Page, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.lineChart = this._renderLineChart();
	    }
	  }, {
	    key: "_renderLineChart",
	    value: function _renderLineChart() {
	      var ctx = React.findDOMNode(this.refs.lineChartsContainer).getContext("2d");
	      return new Chart(ctx).Line(this.state.trendData, {});
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "当前人数与编制"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(_blackboardOrganization2["default"], { count: t.state.personCount, oCount: t.state.organizationCount })
	          )
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "6个月人员趋势"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement("canvas", { className: "line-charts-container", ref: "lineChartsContainer" })
	          )
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "入职/离职人数统计"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(_blackboardTable2["default"], { data: t.state.inOutData })
	          )
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "HR事务预警"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(_blackboardTable2["default"], { data: t.state.hrData })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	module.exports = Page;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Slide = _Tingle.Slide;
	var Icon = _Tingle.Icon;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	    this.state = {
	      units: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 比例布局
	      flexboxes: [2, 3, 4] // 等分布局
	    };
	  }
	
	  _createClass(Page, [{
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        "div",
	        { className: "layoutPage" },
	        React.createElement(
	          "div",
	          { className: "tPL10 tPT20 tFAC" },
	          "比例布局"
	        ),
	        t.state.units.map(function (unit) {
	          return React.createElement(
	            "div",
	            { className: "tFBH demoRow" },
	            React.createElement(
	              "div",
	              { className: "tW" + unit + "R color1" },
	              unit
	            ),
	            React.createElement(
	              "div",
	              { className: "tFB1 color2" },
	              10 - unit
	            )
	          );
	        }),
	        React.createElement(
	          "div",
	          { className: "tFBH demoRow" },
	          React.createElement(
	            "div",
	            { className: "tW1R color1" },
	            "1"
	          ),
	          React.createElement(
	            "div",
	            { className: "tW2R color2" },
	            "2"
	          ),
	          React.createElement(
	            "div",
	            { className: "tW3R color1" },
	            "3"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color2" },
	            "4"
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "tFBH demoRow" },
	          React.createElement(
	            "div",
	            { className: "tW2R color1" },
	            "2"
	          ),
	          React.createElement(
	            "div",
	            { className: "tW3R color2" },
	            "3"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color1" },
	            "5"
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "tFBH demoRow" },
	          React.createElement(
	            "div",
	            { className: "tW3R color1" },
	            "3"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color2" },
	            "4"
	          ),
	          React.createElement(
	            "div",
	            { className: "tW3R color1" },
	            "3"
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "tPL10 tPT20 tFAC" },
	          "等分布局"
	        ),
	        React.createElement(
	          "div",
	          { className: "tFBH demoRow" },
	          React.createElement(
	            "div",
	            { className: "tFB1 color1" },
	            "2等分"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color2" },
	            "2等分"
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "tFBH demoRow" },
	          React.createElement(
	            "div",
	            { className: "tFB1 color1" },
	            "3等分"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color2" },
	            "3等分"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color1" },
	            "3等分"
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "tFBH demoRow" },
	          React.createElement(
	            "div",
	            { className: "tFB1 color1" },
	            "4等分"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color2" },
	            "4等分"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color1" },
	            "4等分"
	          ),
	          React.createElement(
	            "div",
	            { className: "tFB1 color2" },
	            "4等分"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Button = _Tingle.Button;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Page, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      console.log('onClick');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'page-button' },
	        React.createElement(
	          Button,
	          { type: 'primary', onClick: this.handleClick },
	          '主 按 钮'
	        ),
	        React.createElement(
	          Button,
	          { type: 'secondary', onClick: this.handleClick },
	          '次 按 钮'
	        ),
	        React.createElement(
	          Button,
	          { type: 'danger', onClick: this.handleClick },
	          '警告按钮'
	        ),
	        React.createElement(
	          Button,
	          { type: 'primary', size: 'm', onClick: this.handleClick },
	          '中按钮'
	        ),
	        React.createElement(
	          Button,
	          { type: 'primary', size: 's', onClick: this.handleClick },
	          '小按钮'
	        ),
	        React.createElement(
	          Button,
	          { disabled: true },
	          '不可点击'
	        ),
	        React.createElement(
	          Button,
	          { disabled: true, size: 'm' },
	          '不可点击'
	        ),
	        React.createElement(
	          Button,
	          { disabled: true, size: 's' },
	          '不可点击'
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Slide = _Tingle.Slide;
	var Icon = _Tingle.Icon;
	
	var Grid = __webpack_require__(35);
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      icons: [{
	        icon: 'add'
	      }, {
	        icon: 'cross'
	      }, {
	        icon: 'angle-down'
	      }, {
	        icon: 'angle-left'
	      }, {
	        icon: 'angle-right'
	      }, {
	        icon: 'angle-up'
	      }, {
	        icon: 'attachment'
	      }, {
	        icon: 'bookmark'
	      }, {
	        icon: 'check'
	      }, {
	        icon: 'list-index'
	      }, {
	        icon: 'magic'
	      }, {
	        icon: 'map-marker'
	      }, {
	        icon: 'painter'
	      }, {
	        icon: 'pen-underline'
	      }, {
	        icon: 'refresh'
	      }, {
	        icon: 'search'
	      }, {
	        icon: 'setting'
	      }, {
	        icon: 'share'
	      }, {
	        icon: 'star'
	      }, {
	        icon: 'thumbs-up'
	      }, {
	        icon: 'thumbs-down'
	      }]
	    };
	  }
	
	  _createClass(Page, [{
	    key: 'render',
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        'div',
	        { className: 'iconPage' },
	        React.createElement(
	          Grid,
	          { col: '3', className: 'tBCf' },
	          t.state.icons.map(function (item, index) {
	            return React.createElement(
	              'div',
	              { className: 'tFBV tFBAC tFBJC iconGridItem tTE' },
	              React.createElement(
	                'div',
	                { className: 'iconGridIcon' },
	                React.createElement(Icon, { id: 'show-icon-bg', className: 'iconBg' }),
	                React.createElement(Icon, { id: item.icon, className: 'iconIs' })
	              ),
	              React.createElement(
	                'div',
	                { className: 'tFC6 iconText' },
	                item.text || item.icon
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @Author: caoke
	 * @Date:   2015-08-28 13:24:25
	 * @Last Modified by:   caoke
	 * @Last Modified time: 2015-09-13 18:24:07
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var Field = _Tingle.Field;
	var Icon = _Tingle.Icon;
	
	var Calendar = __webpack_require__(43);
	
	var Module = (function (_React$Component) {
	  _inherits(Module, _React$Component);
	
	  function Module(props) {
	    _classCallCheck(this, Module);
	
	    _get(Object.getPrototypeOf(Module.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      show: false,
	      result: '选中的日期范围'
	    };
	  }
	
	  _createClass(Module, [{
	    key: 'handlerCalendarShow',
	    value: function handlerCalendarShow() {
	      var t = this;
	      t.setState({
	        show: true
	      });
	    }
	  }, {
	    key: 'handlerCalendarChange',
	    value: function handlerCalendarChange(values) {
	      var t = this;
	      t.setState({
	        result: values.startDate + ' ~ ' + values.endDate,
	        show: false
	      });
	    }
	  }, {
	    key: 'handlerCalendarClose',
	    value: function handlerCalendarClose() {
	      var t = this;
	      t.setState({
	        show: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        'div',
	        { className: 'mPageCalendar' },
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            '选择日期范围'
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(
	              Field,
	              { label: '选择日期范围' },
	              React.createElement(
	                'div',
	                { className: 'tFBH tFBAC', onClick: t.handlerCalendarShow.bind(t) },
	                React.createElement(
	                  'span',
	                  { className: 'tFB1' },
	                  t.state.result
	                ),
	                React.createElement(Icon, { className: 'tSelectFieldIcon', id: 'tingle-select-field-arrow-right' })
	              )
	            )
	          )
	        ),
	        React.createElement(Calendar, { show: t.state.show, onCancel: t.handlerCalendarClose.bind(t),
	          getValue: t.handlerCalendarChange.bind(t) })
	      );
	    }
	  }]);
	
	  return Module;
	})(React.Component);
	
	module.exports = Module;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Button = _Tingle.Button;
	var Dialog = _Tingle.Dialog;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      show: true
	    };
	  }
	
	  _createClass(Page, [{
	    key: 'handleAlert',
	    value: function handleAlert() {
	      Dialog.alert({
	        title: '测试',
	        children: '我是测试我是测试我是测试我是测试我是测试',
	        onConfirm: function onConfirm() {
	          console.log('alert confirm');
	        }
	      });
	    }
	  }, {
	    key: 'handleTitle',
	    value: function handleTitle() {
	      Dialog.alert({
	        children: '我是测试内容我是测试内容',
	        onConfirm: function onConfirm() {
	          console.log('no title confirm');
	        }
	      });
	    }
	  }, {
	    key: 'handleMultiLines',
	    value: function handleMultiLines() {
	      Dialog.alert({
	        title: '测试',
	        children: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
	        onConfirm: function onConfirm() {
	          console.log('multi lines confirm');
	        }
	      });
	    }
	  }, {
	    key: 'handleConfirm',
	    value: function handleConfirm() {
	      Dialog.confirm({
	        title: '测试',
	        children: '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内',
	        onConfirm: function onConfirm() {
	          console.log('confirm confirm');
	        },
	        onCancel: function onCancel() {
	          console.log('confirm cancel');
	        }
	      });
	    }
	  }, {
	    key: 'handlePage',
	    value: function handlePage() {
	      this.refs.mainDialog.show();
	    }
	  }, {
	    key: 'handleMultiLayer',
	    value: function handleMultiLayer() {
	      this.refs.popDialog.show();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      var buttons = [{
	        children: '取消',
	        callback: function callback() {
	          console.log('page cancel');
	        }
	      }, {
	        children: '异步',
	        callback: function callback() {
	          setTimeout(function () {
	            t.refs.mainDialog.hide();
	          }, 2000);
	          return false;
	        }
	      }, {
	        children: '确定',
	        callback: function callback() {
	          console.log('page confirm');
	        },
	        primary: true
	      }];
	      var popButton = [{
	        children: '测试',
	        callback: function callback() {
	          console.log('pop button');
	        },
	        primary: true
	      }];
	
	      return React.createElement(
	        'div',
	        { className: 'page-dialog' },
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleAlert.bind(this) },
	          'alert'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleConfirm.bind(this) },
	          'confirm'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleTitle.bind(this) },
	          'no title'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleMultiLines.bind(this) },
	          'multi lines'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handlePage.bind(this) },
	          'page'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleMultiLayer.bind(this) },
	          'multi layer'
	        ),
	        React.createElement(
	          Dialog,
	          { ref: 'mainDialog', title: '页面上', buttons: buttons },
	          '我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内容我是测试内'
	        ),
	        React.createElement(
	          Dialog,
	          { width: 300, top: '55%', ref: 'popDialog', buttons: popButton },
	          React.createElement(
	            'div',
	            { onClick: this.handleTitle.bind(this) },
	            '点我出第二层'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Slide = _Tingle.Slide;
	var Icon = _Tingle.Icon;
	var Tip = _Tingle.Tip;
	var Button = _Tingle.Button;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(Page, [{
	    key: 'handleClickSuccess',
	    value: function handleClickSuccess() {
	      Tip.show({
	        icon: 'success',
	        text: '提交成功',
	        onHide: function onHide() {
	          console.log('success tip is hidden');
	        }
	      });
	    }
	  }, {
	    key: 'handleClickError',
	    value: function handleClickError() {
	      Tip.show({
	        icon: 'error',
	        text: '提交失败',
	        onHide: function onHide() {
	          console.log('error tip is hidden');
	        }
	      });
	    }
	  }, {
	    key: 'handleClickFail',
	    value: function handleClickFail() {
	      Tip.show({
	        icon: 'fail',
	        text: '网络连接错误',
	        onHide: function onHide() {
	          console.log('fail tip is hidden');
	        }
	      });
	    }
	  }, {
	    key: 'handleClickText',
	    value: function handleClickText() {
	      Tip.show({
	        text: '文字提醒文字提醒文字',
	        onHide: function onHide() {
	          console.log('text tip is hidden');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'page-tip' },
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleClickSuccess.bind(this) },
	          'success'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleClickError.bind(this) },
	          'error'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleClickFail.bind(this) },
	          'fail'
	        ),
	        React.createElement(
	          Button,
	          { className: 'demo', onClick: this.handleClickText.bind(this) },
	          'text'
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Slide = _Tingle.Slide;
	
	var isSupportWebp = __webpack_require__(41).isSupportWebp();
	
	var lastTime = 0;
	var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀
	
	var requestAnimationFrame = window.requestAnimationFrame;
	var cancelAnimationFrame = window.cancelAnimationFrame;
	
	var prefix;
	//通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
	for (var i = 0; i < prefixes.length; i++) {
	  if (requestAnimationFrame && cancelAnimationFrame) {
	    break;
	  }
	  prefix = prefixes[i];
	  requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
	  cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
	}
	
	//如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
	if (!requestAnimationFrame || !cancelAnimationFrame) {
	  requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    //为了使setTimteout的尽可能的接近每秒60帧的效果
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	
	  cancelAnimationFrame = function (id) {
	    window.clearTimeout(id);
	  };
	}
	
	//得到兼容各浏览器的API
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
	
	window.SiriWave = function (opt) {
	  this.opt = opt || {};
	
	  this.K = 2;
	  this.F = 6;
	  this.speed = this.opt.speed || 0.1;
	  this.noise = this.opt.noise || 0;
	  this.phase = this.opt.phase || 0;
	
	  if (!devicePixelRatio) devicePixelRatio = 1;
	  this.width = devicePixelRatio * (this.opt.width || 320);
	  this.height = devicePixelRatio * (this.opt.height || 100);
	  this.MAX = this.height / 2 - 4;
	
	  this.canvas = document.createElement('canvas');
	  this.canvas.width = this.width;
	  this.canvas.height = this.height;
	  this.canvas.style.width = this.width / devicePixelRatio + 'px';
	  this.canvas.style.height = this.height / devicePixelRatio + 'px';
	  (this.opt.container || document.body).appendChild(this.canvas);
	  this.ctx = this.canvas.getContext('2d');
	
	  this.run = false;
	};
	
	SiriWave.prototype = {
	
	  _globalAttenuationFn: function _globalAttenuationFn(x) {
	    return Math.pow(this.K * 4 / (this.K * 4 + Math.pow(x, 4)), this.K * 2);
	  },
	
	  _drawLine: function _drawLine(attenuation, color, width) {
	    this._clear();
	    this.ctx.moveTo(0, 0);
	    this.ctx.beginPath();
	    this.ctx.strokeStyle = color;
	    this.ctx.lineWidth = width || 1;
	    var x, y;
	    for (var i = -this.K; i <= this.K; i += 0.01) {
	      x = this.width * ((i + this.K) / (this.K * 2));
	      y = this.height / 2 + this.noise * this._globalAttenuationFn(i) * (1 / attenuation) * Math.sin(this.F * i - this.phase);
	      this.ctx.lineTo(x, y);
	    }
	    this.ctx.stroke();
	  },
	
	  _clear: function _clear() {
	    this.ctx.globalCompositeOperation = 'destination-out';
	    this.ctx.fillRect(0, 0, this.width, this.height);
	    this.ctx.globalCompositeOperation = 'source-over';
	  },
	
	  _draw: function _draw() {
	    if (!this.run) return;
	
	    this.phase = (this.phase + this.speed) % (Math.PI * 64);
	    this._clear();
	    this._drawLine(1, 'rgba(0,0,0,0.2)', 1.5);
	
	    requestAnimationFrame(this._draw.bind(this), 2000);
	    // setInterval(this._draw.bind(this), 1000);
	  },
	
	  start: function start() {
	    this.phase = 0;
	    this.run = true;
	    this._draw();
	  },
	
	  stop: function stop() {
	    this.run = false;
	    this._clear();
	  },
	
	  setNoise: function setNoise(v) {
	    this.noise = Math.min(v, 1) * this.MAX;
	  },
	
	  setSpeed: function setSpeed(v) {
	    this.speed = v;
	  },
	
	  setWidth: function setWidth(v) {
	    this.width = v;
	  },
	
	  setHeight: function setHeight(v) {
	    this.height = v;
	  },
	
	  set: function set(obj) {
	    obj.noise && this.setNoise(obj.noise);
	    obj.speed && this.setSpeed(speed);
	    obj.width && this.setWidth(width);
	    obj.height && this.setHeight(height);
	  }
	
	};
	
	var Lwslide = __webpack_require__(42);
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Page, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var SW1 = new SiriWave({
	        width: window.innerWidth * 0.5,
	        height: 30,
	        container: document.getElementById("canvas1")
	      });
	
	      SW1.setSpeed(0.3);
	      SW1.setNoise(0.1);
	      SW1.start();
	
	      var SW2 = new SiriWave({
	        width: window.innerWidth,
	        height: 30,
	        container: document.getElementById("canvas2")
	      });
	
	      SW2.setSpeed(0.3);
	      SW2.setNoise(0.1);
	      SW2.start();
	
	      var SW3 = new SiriWave({
	        width: window.innerWidth * 0.5,
	        height: 30,
	        container: document.getElementById("canvas3")
	      });
	
	      SW3.setSpeed(0.3);
	      SW3.setNoise(0.1);
	      SW3.start();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(Lwslide, null)
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var reactMixin = __webpack_require__(44);
	var _Tingle = Tingle;
	var Group = _Tingle.Group;
	var Icon = _Tingle.Icon;
	
	var Page = (function (_React$Component) {
	  _inherits(Page, _React$Component);
	
	  function Page(props) {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(Page, [{
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        "div",
	        { className: "projectPage" },
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "阿里内外"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(
	              "div",
	              { className: "project" },
	              "欢行-出租车"
	            ),
	            React.createElement(
	              "div",
	              { className: "project" },
	              "欢行-专车/快车"
	            ),
	            React.createElement(
	              "div",
	              { className: "project" },
	              "欢行-借款"
	            ),
	            React.createElement(
	              "div",
	              { className: "project" },
	              "移动商保"
	            ),
	            React.createElement(
	              "div",
	              { className: "project" },
	              "全球假期系统"
	            )
	          )
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "钉钉"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(
	              "div",
	              { className: "project" },
	              "移动审批"
	            ),
	            React.createElement(
	              "div",
	              { className: "project" },
	              "定制化移动审批"
	            ),
	            React.createElement("div", { className: "project" })
	          )
	        ),
	        React.createElement(
	          Group,
	          null,
	          React.createElement(
	            Group.Head,
	            null,
	            "来往"
	          ),
	          React.createElement(
	            Group.List,
	            { lineIndent: 14, itemIndent: [14, 14] },
	            React.createElement(
	              "div",
	              { className: "project" },
	              "老扎堆广场"
	            ),
	            React.createElement(
	              "div",
	              { className: "project" },
	              "新版本功能宣传页"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Page;
	})(React.Component);
	
	reactMixin.onClass(Page, ReactRouter.Navigation);
	
	module.exports = Page;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 先临时写个Grid组件
	 */
	
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(47);
	
	var GridRow = (function (_React$Component) {
	  _inherits(GridRow, _React$Component);
	
	  function GridRow(props) {
	    _classCallCheck(this, GridRow);
	
	    _get(Object.getPrototypeOf(GridRow.prototype), "constructor", this).call(this, props);
	  }
	
	  // 根据col的设置，补充空的item
	
	  _createClass(GridRow, [{
	    key: "_renderEmptyitem",
	    value: function _renderEmptyitem() {
	      var t = this;
	      var emptyItemNumber = t.props.col - React.Children.count(t.props.children);
	      var ret = [];
	      while (emptyItemNumber--) {
	        ret.push(React.createElement("div", { className: "tFB1 tFBV tFBAC tFBJC tGridItem", style: { height: "" + 10 / t.props.col + "rem" } }));
	      }
	      return ret;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this;
	
	      return React.createElement(
	        "div",
	        { className: "tFBH tGridRow" },
	        React.Children.map(t.props.children, function (child) {
	          return React.createElement(
	            "div",
	            { className: "tFB1 tFBV tFBAC tFBJC tGridItem", style: { height: "" + 10 / t.props.col + "rem" } },
	            child
	          );
	        }),
	        t._renderEmptyitem()
	      );
	    }
	  }]);
	
	  return GridRow;
	})(React.Component);
	
	GridRow.defaultProps = {
	  col: 4
	};
	
	GridRow.propTypes = {
	  col: React.PropTypes.number
	};
	
	var Grid = (function (_React$Component2) {
	  _inherits(Grid, _React$Component2);
	
	  function Grid(props) {
	    _classCallCheck(this, Grid);
	
	    _get(Object.getPrototypeOf(Grid.prototype), "constructor", this).call(this, props);
	  }
	
	  _createClass(Grid, [{
	    key: "_renderGridRow",
	    value: function _renderGridRow(rowIndexArray) {
	      var t = this;
	      return React.createElement(
	        GridRow,
	        { col: t.props.col },
	        rowIndexArray.map(function (index) {
	          return t.props.children[index];
	        })
	      );
	    }
	  }, {
	    key: "_groupChildrenIndexByRow",
	    value: function _groupChildrenIndexByRow() {
	      var t = this;
	      var rowIndexes = [];
	      var childrenCount = React.Children.count(t.props.children);
	
	      var dummyIndexArray = [];
	      var dummyIndex = 0;
	      while (childrenCount--) {
	        dummyIndexArray.push(dummyIndex++);
	      }
	
	      while (dummyIndexArray.length) {
	        rowIndexes.push(dummyIndexArray.splice(0, t.props.col));
	      }
	
	      return rowIndexes;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this;
	      var groupIndexes = t._groupChildrenIndexByRow();
	
	      return React.createElement(
	        "div",
	        { className: classnames('tGrid', t.props.className) },
	        groupIndexes.map(function (rowIndexes) {
	          return t._renderGridRow(rowIndexes);
	        })
	      );
	    }
	  }]);
	
	  return Grid;
	})(React.Component);
	
	Grid.defaultProps = {
	  className: '',
	  col: 4
	};
	
	Grid.propTypes = {
	  className: React.PropTypes.string,
	  col: React.PropTypes.number
	};
	
	module.exports = Grid;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = [{
	  nickName: "拂山",
	  name: "贾松",
	  workId: "74803",
	  title: "EHR-前端开发-财务线",
	  imageUrl: "//gw.alicdn.com/tps/i4/TB1PqqyHXXXXXarXVXXLDO01XXX-319-319.jpg"
	}, {
	  nickName: "九神",
	  name: "邵寒超",
	  workId: "67732",
	  title: "EHR-前端开发",
	  imageUrl: "//gw.alicdn.com/tps/TB1XTEAJFXXXXXjXVXXXXXXXXXX-2448-2448.jpg"
	}, {
	  nickName: "茶山",
	  name: "张烨",
	  workId: "81093",
	  title: "行政&协同-UED",
	  imageUrl: "//gw.alicdn.com/tps/TB1Qk3YJpXXXXXwXVXXXXXXXXXX-355-358.jpg"
	}, {
	  nickName: "羞花",
	  name: "黄琼",
	  workId: "28701",
	  title: "行政&协同-UED",
	  imageUrl: "//gw.alicdn.com/tps/TB1G1oQJpXXXXX2aXXXXXXXXXXX-1836-1836.jpg"
	}, {
	  nickName: "莫筝",
	  name: "苏文苑",
	  workId: "99982",
	  title: "CTO-技术发展部",
	  imageUrl: "//gw.alicdn.com/tps/TB1qru1JVXXXXaDXVXXXXXXXXXX-1231-997.png"
	}, {
	  nickName: "多月",
	  name: "叶雅巧",
	  workId: "72953",
	  title: "行政&协同-UED",
	  imageUrl: "//gw.alicdn.com/tps/TB1C6g4JpXXXXX3XFXXXXXXXXXX-640-640.jpg"
	}, {
	  nickName: "太奈",
	  name: "徐飞",
	  workId: "16949",
	  title: "核心业务-技术二部-UED&策划运营",
	  imageUrl: "//gw.alicdn.com/tps/TB1fKs6JpXXXXcSXpXXXXXXXXXX-1280-1280.jpg"
	}, {
	  nickName: "钰馨",
	  name: "郝晓敏",
	  workId: "86960",
	  title: "核心业务-技术二部-UED&策划运营",
	  imageUrl: "//gw.alicdn.com/tps/TB1_i4aJFXXXXXJXpXXXXXXXXXX-389-389.jpg"
	}, {
	  nickName: "仓舒",
	  name: "曹柯",
	  workId: "67955",
	  title: "EHR-前端开发-基础架构",
	  imageUrl: "//gw.alicdn.com/tps/i3/TB1CMOEHXXXXXXYXpXXeWY9VXXX-385-385.png"
	}, {
	  nickName: "芠鸯",
	  name: "边晓阳",
	  workId: "87029",
	  title: "核心业务-技术二部-UED&策划运营",
	  imageUrl: "//gw.alicdn.com/tps/TB1rGQ1JpXXXXb.XFXXXXXXXXXX-370-376.jpg"
	}, {
	  nickName: "光弘",
	  name: "王思佳",
	  workId: "87181",
	  title: "EHR-前端开发-基础架构",
	  imageUrl: "//gw.alicdn.com/tps/TB1MUg.JpXXXXbHXXXXXXXXXXXX-2340-2340.jpg"
	}, {
	  nickName: "涵宇",
	  name: "沈滨洋",
	  workId: "31174",
	  title: "EHR-前端开发-EHR线",
	  imageUrl: "//gw.alicdn.com/tps/i1/TB1xquGHXXXXXb3XXXXeRjwSVXX-2736-2834.jpg"
	}, {
	  nickName: "张顺",
	  name: "康宁波",
	  workId: "24668",
	  title: "EHR-前端开发",
	  imageUrl: "//gw.alicdn.com/tps/i1/TB1ZeiyHXXXXXXDXFXXupdCSXXX-2760-2760.jpg"
	}, {
	  nickName: "一篙",
	  name: "刘敏杰",
	  workId: "80385",
	  title: "EHR-前端开发-财务线",
	  imageUrl: "//gw.alicdn.com/tps/TB1NxQWJpXXXXcqXFXXXXXXXXXX-2736-3648.jpg"
	}, {
	  nickName: "兰弼",
	  name: "董瑞阳",
	  workId: "65587",
	  title: "EHR-前端开发",
	  imageUrl: "//gw.alicdn.com/tps/i3/TB1RwSxHXXXXXa6XVXXFSNq0VXX-640-663.jpg"
	}, {
	  nickName: "康为",
	  name: "晏兵兵",
	  workId: "85377",
	  title: "EHR-前端开发-财务线",
	  imageUrl: "//gw.alicdn.com/tps/TB1BM7PJpXXXXXraXXXXXXXXXXX-540-540.jpg"
	}, {
	  nickName: "金鸿",
	  name: "张金红",
	  workId: "72053",
	  title: "EHR-前端开发-EHR线",
	  imageUrl: "//gw.alicdn.com/tps/i1/TB13N9GHXXXXXXdXXXXBV9TYFXX-952-952.jpg"
	}, {
	  nickName: "吴琼",
	  name: "吴琼",
	  workId: "55943",
	  title: "EHR-前端开发-EHR线",
	  imageUrl: "//gw.alicdn.com/tps/i4/TB1NNeEHXXXXXXlXVXXx2rSIVXX-600-600.jpg"
	}];
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = [{
	  "line": "阿里内外",
	  "projects": [{
	    "name": "欢行-出租车"
	  }, {
	    "name": "欢行-专车/快车"
	  }, {
	    "name": "欢行-借款"
	  }, {
	    "name": "移动商保"
	  }, {
	    "name": "全球假期系统"
	  }]
	}, {
	  "line": "钉钉",
	  "projects": [{
	    "name": "移动审批"
	  }, {
	    "name": "定制化移动审批"
	  }, {
	    "name": "移动巡检(进行中)"
	  }]
	}, {
	  "line": "来往",
	  "projects": [{
	    "name": "老扎堆广场"
	  }, {
	    "name": "新版本功能宣传页"
	  }]
	}];
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var isSupportWebp = __webpack_require__(41).isSupportWebp();
	var _Tingle = Tingle;
	var Avatar = _Tingle.Avatar;
	
	var Item = (function (_React$Component) {
	  _inherits(Item, _React$Component);
	
	  function Item(props) {
	    _classCallCheck(this, Item);
	
	    _get(Object.getPrototypeOf(Item.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Item, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var t = this;
	      WindVane.call('WVNative', 'showPersonProfile', {
	        'userId': t.props.itemData.workId
	      }, function () {});
	    }
	  }, {
	    key: '_getAvatar',
	    value: function _getAvatar(data) {
	      //if (data.imageUrl) {
	      //  return (<img className="pic" src={data.imageUrl + '_200x200xz.jpg' + (isSupportWebp ? '_.webp' : '')}/>);
	      //} else {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(Avatar, { size: '40px', name: data.nickName })
	      );
	      //}
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      var data = t.props.itemData;
	      var style = data.labelStyle || {};
	      return React.createElement(
	        'div',
	        { className: 'about-item tFBH tFBAC', onClick: t.handleClick.bind(t) },
	        t._getAvatar(data),
	        React.createElement(
	          'p',
	          { className: 'info tFB1' },
	          React.createElement(
	            'span',
	            { className: 'nickname', style: style },
	            data.name,
	            '(',
	            data.nickName,
	            ')'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Item;
	})(React.Component);
	
	module.exports = Item;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Module = (function (_React$Component) {
	  _inherits(Module, _React$Component);
	
	  function Module(props) {
	    _classCallCheck(this, Module);
	
	    _get(Object.getPrototypeOf(Module.prototype), "constructor", this).call(this, props);
	  }
	
	  _createClass(Module, [{
	    key: "render",
	    value: function render() {
	      var t = this;
	      return React.createElement(
	        "div",
	        { className: "blackboard-organization" },
	        React.createElement(
	          "div",
	          { className: "count" },
	          t.props.count
	        ),
	        React.createElement(
	          "div",
	          { className: "organizationCount" },
	          "编制人数：",
	          t.props.oCount
	        )
	      );
	    }
	  }]);
	
	  return Module;
	})(React.Component);
	
	Module.displayName = "BlackBoardOrganization";
	
	module.exports = Module;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Module = (function (_React$Component) {
	  _inherits(Module, _React$Component);
	
	  function Module(props) {
	    _classCallCheck(this, Module);
	
	    _get(Object.getPrototypeOf(Module.prototype), "constructor", this).call(this, props);
	  }
	
	  _createClass(Module, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "table",
	        { className: "blackboard-table" },
	        React.createElement(
	          "tbody",
	          null,
	          this.props.data.map(function (d) {
	            return React.createElement(
	              "tr",
	              null,
	              d.map(function (v) {
	                var child = '';
	                if (v.highlight) {
	                  child = React.createElement(
	                    "span",
	                    { className: "blackboard-highlight" },
	                    v.title
	                  );
	                } else if (v.strong) {
	                  child = React.createElement(
	                    "span",
	                    { className: "blackboard-strong" },
	                    v.title
	                  );
	                } else {
	                  child = React.createElement(
	                    "span",
	                    { className: "blackboard-normal" },
	                    v.title
	                  );
	                }
	                return React.createElement(
	                  "td",
	                  null,
	                  child
	                );
	              })
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return Module;
	})(React.Component);
	
	Module.displayName = "BlackBoardTable";
	
	module.exports = Module;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Slide = Tingle.Slide;
	var classnames = __webpack_require__(47);
	/**
	 * Lwslide Component for tinglejs
	 */
	
	var Lwslide = (function (_React$Component) {
	  _inherits(Lwslide, _React$Component);
	
	  function Lwslide(props) {
	    _classCallCheck(this, Lwslide);
	
	    _get(Object.getPrototypeOf(Lwslide.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      active: 0,
	      showDialog: 0,
	      showSecret: false,
	      showLast: 0,
	      countDown: 3,
	      slideList: [{
	        img: './tingle/tingle-slide/demo/img/0.jpg'
	      }, {
	        img: './tingle/tingle-slide/demo/img/1.jpg'
	      }, {
	        img: './tingle/tingle-slide/demo/img/2.jpg'
	      }]
	    };
	  }
	
	  _createClass(Lwslide, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var t = this;
	      t.autoSlide = setTimeout(function () {
	        t.refs.slide.goNext();
	      }, 3000);
	    }
	  }, {
	    key: 'handleSlideEnd',
	    value: function handleSlideEnd(info) {
	      var t = this;
	
	      this.setState({
	        active: info.index
	      });
	
	      if (info.index !== t.cache) {
	        clearTimeout(t.autoSlide);
	        clearInterval(t.timer);
	        clearInterval(t.countDown);
	        clearInterval(t.showLast);
	        t.setState({
	          showDialog: 0,
	          countDown: 3,
	          showSecret: false,
	          showLast: 0
	        });
	        if (info.index === 1) {
	          t.setState({
	            showLast: 0
	          });
	          t.timer = setInterval(function () {
	            t.setState({
	              showDialog: t.state.showDialog + 1
	            });
	            if (t.state.showDialog == 8) {
	              t.handleClick();
	            }
	          }, 500);
	        } else if (info.index === 2) {
	          t.showLast = setInterval(function () {
	            t.setState({
	              showLast: t.state.showLast + 1
	            });
	            if (t.state.showLast === 3) {
	              clearInterval(t.showLast);
	            }
	          }, 500);
	        }
	      }
	      t.cache = info.index;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var t = this;
	      clearInterval(t.countDown);
	      clearInterval(t.timer);
	      t.setState({
	        showSecret: true
	      });
	      t.countDown = setInterval(function () {
	        t.setState({
	          countDown: t.state.countDown - 1
	        });
	        if (t.state.countDown == 0) {
	          clearInterval(t.countDown);
	          t.autoSlide = setTimeout(function () {
	            t.refs.slide.goNext();
	          }, 500);
	        }
	      }, 1000);
	    }
	  }, {
	    key: 'handleTS',
	    value: function handleTS() {
	      var t = this;
	      clearTimeout(t.autoSlide);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var t = this;
	      var pageHeight = document.documentElement.clientHeight || window.innerHeight;
	      return React.createElement(
	        'div',
	        { className: 'lwSlide', onTouchStart: t.handleTS.bind(t) },
	        React.createElement(
	          Slide,
	          { ref: 'slide', height: pageHeight, onSlideEnd: t.handleSlideEnd.bind(t), loop: false },
	          React.createElement(
	            'div',
	            { className: 'tFBV', id: 'homepage', style: { backgroundColor: "white" } },
	            React.createElement('div', { className: 'figure' }),
	            React.createElement(
	              'div',
	              { className: 'msgBox' },
	              React.createElement('div', { className: 'hometalk' })
	            ),
	            React.createElement('div', { id: 'canvas1' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'tFBV', id: 'dialogBox', style: { backgroundColor: "#f2f2f2" } },
	            React.createElement(
	              'div',
	              { className: classnames({
	                  dialog: true,
	                  tDN: t.state.showDialog < 0,
	                  fadeIn: t.state.showDialog >= 0
	                }) },
	              React.createElement('div', { className: 'avatar tDIB' }),
	              React.createElement('div', { className: 'message tF16 tDIB talk1' })
	            ),
	            React.createElement(
	              'div',
	              { className: classnames({
	                  dialog: true,
	                  tDN: t.state.showDialog < 2,
	                  fadeIn: t.state.showDialog >= 2
	                }) },
	              React.createElement('div', { className: 'avatar tDIB' }),
	              React.createElement('div', { className: 'message tF16 tDIB talk2' })
	            ),
	            React.createElement(
	              'div',
	              { className: classnames({
	                  dialog: true,
	                  tDN: t.state.showDialog < 4,
	                  tHide: t.state.showSecret,
	                  fadeIn: t.state.showDialog >= 4
	                }) },
	              React.createElement('div', { className: 'avatar tDIB' }),
	              React.createElement('div', { className: 'message tF16 tDIB talk3', id: 'click', onClick: t.handleClick.bind(t) }),
	              React.createElement('div', { className: 'hand tDIB' }),
	              React.createElement('div', { className: 'clock tDIB' })
	            ),
	            React.createElement(
	              'div',
	              { className: classnames({
	                  dialog: true,
	                  tHide: !t.state.showSecret,
	                  fadeout: t.state.countDown == 0
	                }) },
	              React.createElement('div', { className: 'avatar tDIB' }),
	              React.createElement('div', { className: 'message tF16 tDIB talk4' }),
	              React.createElement(
	                'div',
	                { className: 'countDown tDIB' },
	                t.state.countDown
	              )
	            ),
	            React.createElement('div', { id: 'canvas2' })
	          ),
	          React.createElement(
	            'div',
	            { className: 'tFBV tFBAC', id: 'lastPage', style: { backgroundColor: "white" } },
	            React.createElement('div', { className: classnames({
	                figure: true,
	                tDN: t.state.showLast >= 3
	              }) }),
	            React.createElement(
	              'div',
	              { className: classnames({
	                  figBrokenBox: true,
	                  down: t.state.showLast >= 3 && pageHeight > 490,
	                  down2: t.state.showLast >= 3 && pageHeight <= 490,
	                  tDN: t.state.showLast < 3
	                }) },
	              React.createElement('div', { className: classnames({
	                  figBroken: t.state.active == 2
	                }) })
	            ),
	            React.createElement(
	              'div',
	              { className: classnames({
	                  msgBox: true,
	                  fadeIn: t.state.showLast >= 3
	                }) },
	              React.createElement('div', { className: 'lasttalk' })
	            ),
	            React.createElement('div', { id: 'canvas3', className: classnames({
	                tDN: t.state.showLast >= 3
	              }) })
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'tFBH dotBox' },
	          this.state.slideList.map(function (item, index) {
	            return React.createElement('div', { className: classnames({
	                dot: true,
	                active: t.state.active === index
	              }) });
	          })
	        )
	      );
	    }
	  }]);
	
	  return Lwslide;
	})(React.Component);
	
	Lwslide.defaultProps = {};
	
	// http://facebook.github.io/react/docs/reusable-components.html
	Lwslide.propTypes = {};
	
	module.exports = Lwslide;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(46);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(48);
	var assign = __webpack_require__(49);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = (function() {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	})();


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSupportWebp = window.localStorage.getItem('webp');
	var WEBPTESTURL = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	
	var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
	
	if (!isIOS && isSupportWebp === null) {
	  var img = new Image();
	
	  img.onload = function () {
	    if (img.height === 2) {
	      window.localStorage.setItem('webp', 'true');
	    } else {
	      window.localStorage.setItem('webp', 'false');
	    }
	    img = img.onload = img.onerror = null;
	  };
	
	  img.onerror = function () {
	    window.localStorage.setItem('webp', 'false');
	    img = img.onload = img.onerror = null;
	  };
	
	  img.src = WEBPTESTURL;
	}
	
	// iOS 需要插件支持
	module.exports = {
	  isSupportWebp: function isSupportWebp() {
	    return isIOS ? false : window.localStorage.getItem('webp') === 'true';
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var classnames = __webpack_require__(47);
	
	var i18n = __webpack_require__(50);
	
	var Calendar = React.createClass({
	  displayName: 'Calendar',
	
	  getInitialState: function getInitialState() {
	    var ra,
	        suf,
	        pre,
	        t = this,
	        cur = 0,
	        now = new Date(),
	        range = [],
	        date = new Date(),
	        now = new Date(),
	        defaultDate = this.props.defaultDate; //[2015-05-120/2015-05-201]
	
	    now.setDate(now.getDate()); //设置为当日的明天
	    defaultDate = defaultDate || format(now, '-') + '2';
	
	    t.weekTitle = i18n[t.props.lang].weekTitle;
	    t.monthTitle = i18n[t.props.lang].monthTitle;
	    t.dayTipMap = i18n[t.props.lang].dayTipMap;
	    t.button = i18n[t.props.lang].button;
	
	    if (defaultDate) {
	      ra = defaultDate.split('/'); //["2015-05-120", "2015-05-201"]
	      suf = ra[0].substring(10); //am-pm
	      pre = ra[0].substring(0, 10); //日期
	      date = new Date(pre);
	      date.setDate(1); //将当前日期的设置为本月1号
	      date.setMonth(parseInt(ra[0].substring(5, 7), 10) - 1); //设置为自定义的月份(5月)
	
	      range.push({ date: pre, day: suf == '1' ? 'PM' : suf == '0' ? 'AM' : 'FULL' });
	
	      //结束时间
	      if (ra[1]) {
	        suf = ra[1].substring(10);
	        pre = ra[1].substring(0, 10);
	        if (pre == range[0].date) {
	          //如果结束日期等于开始日
	          if (ra[1].substring(10) == range[0].day) {
	            //同时上下午相同
	            range.push({ date: pre, day: range[0].day });
	          } else {
	            range.push({ date: pre, day: 'FULL' });
	          }
	        } else {
	          range.push({ date: pre, day: suf == '0' ? 'AM' : 'PM' });
	        }
	        cur = 1;
	      } else {
	        range.push({ date: pre, day: suf == '0' ? 'AM' : suf == '1' ? 'PM' : 'FULL' });
	      }
	    }
	
	    return {
	      date: date,
	      range: range,
	      cur: cur,
	      showDefault: true,
	      showState: 1
	    };
	  },
	
	  getState: function getState() {
	    var state = this.state.showState < 2 ? this.state : this.getInitialState();
	    this.state = state;
	    return this.state;
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      today: format(new Date(), '-'),
	      minDate: '0000-00-00',
	      maxDate: '9999-99-99'
	    };
	  },
	
	  handlePrev: function handlePrev() {
	    var t = this,
	        state = t.state,
	        date = state.date;
	    date.setMonth(date.getMonth() - 1);
	    state.date = date;
	    t.setState(state);
	    t.props.handleSwitch(date);
	  },
	
	  handleNext: function handleNext() {
	    var t = this,
	        state = t.state,
	        date = state.date;
	    date.setMonth(date.getMonth() + 1);
	    state.date = date;
	    t.setState(state);
	    t.props.handleSwitch(date);
	  },
	
	  handleClick: function handleClick(e) {
	    var t = this,
	        state = this.state,
	        cur = state.cur,
	        range = state.range,
	        target = e.target,
	        showDefault = state.showDefault,
	        date = target.getAttribute('data-date');
	
	    // 如果是单选模式，那么就把range数组置空，使其一直维持在只有一个元素的状态
	    if (t.props.singleMode && range.length > 0) {
	      range = [];
	      cur = 0;
	    }
	
	    //当含有invalid标识时不可选
	    target = date ? target : target.parentNode;
	    if (target.classList && target.classList.contains('tInvalid') || target.className.indexOf('tInvalid') > -1) {
	      return;
	    }
	
	    date = target.getAttribute('data-date');
	
	    if (showDefault) {
	      state.showDefault = false;
	      range = [];
	    }
	
	    if (range.length == 0) {
	      range[0] = {
	        date: date,
	        day: 'FULL'
	      };
	      cur = 0;
	    } else if (range.length == 1) {
	      if (date < range[0].date) {
	        range[1] = range[0];
	        range[0] = {
	          date: date,
	          day: 'FULL'
	        };
	        cur = 0;
	      } else if (date == range[0].date) {
	        this.reset();
	        return;
	      } else {
	        range[1] = {
	          date: date,
	          day: 'FULL'
	        };
	        cur = 1;
	      }
	    } else {
	      if (date < range[0].date) {
	        range[0] = {
	          date: date,
	          day: 'FULL'
	        };
	        cur = 0;
	      } else if (date == range[1].date) {
	        if (range[1].date == range[0].date) {
	          this.reset();
	          return;
	        }
	        cur = 1;
	      } else {
	        range[1] = {
	          date: date,
	          day: 'FULL'
	        };
	        cur = 1;
	      }
	    }
	
	    state.range = range;
	    state.cur = cur;
	    this.setState(state, function () {
	      if (t.props.singleMode && t.props.autoFinish) {
	        // 如果是自动完成模式，则不需要点击确定，直接触发 getValue()
	        this.props.getValue({ startDate: range[0].date, startDateType: 'AM', endDate: range[0].date, endDateType: 'PM' });
	      }
	    });
	  },
	
	  clear: function clear() {
	    this.reset();
	  },
	
	  reset: function reset(showState) {
	    var date = new Date();
	    this.setState({
	      date: date,
	      range: [],
	      cur: 0,
	      showDefault: true,
	      showState: showState || 1
	    });
	  },
	
	  onCancel: function onCancel() {
	    this.reset(2);
	    var onCancel = this.props.onCancel;
	    onCancel();
	  },
	
	  onConfirm: function onConfirm() {
	    var day0,
	        day1,
	        t = this,
	        range = this.state.range;
	    if (range.length == 0) {
	      new Prompt({
	        content: '请选择时间',
	        duration: 2
	      });
	      return;
	    }
	    if (range[1]) {
	      //选择多天时
	      day0 = range[0].day;
	      day1 = range[1].day;
	      this.props.getValue({ startDate: range[0].date, startDateType: day0, endDate: range[1].date, endDateType: day1 });
	    } else {
	      //选择单天时
	      if (range[0].day == 'FULL') {
	        //若为“全天”时，则按照“上午” 到 “下午”传递
	        this.props.getValue({ startDate: range[0].date, startDateType: 'AM', endDate: range[0].date, endDateType: 'PM' });
	      } else {
	        this.props.getValue({
	          startDate: range[0].date,
	          startDateType: range[0].day,
	          endDate: range[0].date,
	          endDateType: range[0].day
	        });
	      }
	    }
	    this.reset(2);
	  },
	
	  isInRange: function isInRange(day) {
	    var state = this.state,
	        range = state.range,
	        cur = this.state.cur;
	    if (range.length == 1) {
	      if (day == range[0].date) {
	        return range[0].day;
	      }
	    } else if (range.length == 2) {
	      if (day > range[0].date && day < range[1].date) {
	        return 'selectedBetween';
	      } else if (day == range[0].date && day == range[1].date) {
	        if (range[0].day == range[1].day) {
	          return range[0].day;
	        } else {
	          return 'FULL';
	        }
	      } else if (day == range[0].date) {
	        return range[0].day;
	      } else if (day == range[1].date) {
	        return range[1].day;
	      }
	    }
	  },
	
	  handleDate: function handleDate() {
	    var i,
	        align,
	        cls,
	        day,
	        dateContent,
	        dayType,
	        dayTip,
	        t = this,
	        ret = [],
	        week = [],
	        state = this.state,
	        date = new Date(state.date),
	        prop = this.props,
	        today = prop.today,
	        code = prop.calendarCode,
	        existsLeave = prop.existsLeave,
	        range = state.range,
	        month = date.getMonth();
	
	    date.setDate(1); //设置到当前月的第一天
	    align = date.getDay(); //当月首天对应的星期
	    date.setDate(date.getDate() - align); //设置上月在本月显示的多余天数
	
	    //计算上个月剩余补充天数
	    for (i = 0; i < align; i++) {
	      cls = 'tFB1 tOth ';
	      day = format(date, '-');
	      cls += prop.minDate && day < prop.minDate || prop.maxDate && day > prop.maxDate ? ' tInvalid ' : '';
	      cls = cls + (today == day ? ' tNow ' : '');
	
	      //获取日期特殊标识符
	      if (code) {
	        var arr = day.split('-'),
	            tYear = arr[0],
	            tMonth = (arr[1] * 1).toString(),
	            tDay = (arr[2] * 1).toString();
	        if (code[tYear] && code[tYear][tMonth] && code[tYear][tMonth][tDay]) {
	          var tStatus = code[tYear][tMonth][tDay][1]; //1假2休3班
	          if (tStatus == 1 || tStatus == 2) {
	            cls = cls + ' tGray ';
	          } else if (tStatus == 3) {
	            cls = cls + ' tBlue ';
	          }
	        }
	      }
	      ;
	
	      //获取当前区间(am/pm/full)，根据不同区间生成不同的cls
	      dayType = this.isInRange(day);
	      if (dayType) {
	        cls = cls + ' tSelected';
	        cls = cls + (dayType == 'AM' ? ' tAM' : dayType == 'PM' ? ' tPM' : '');
	      }
	
	      //管理日历时前后月不可点
	      if (t.props.singleMode && t.props.autoFinish) {
	        cls = cls + ' tInvalid ';
	      }
	      ;
	
	      dateContent = React.createElement(
	        'div',
	        { key: day, className: cls + ' tTap tOp', 'data-date': day, onClick: this.handleClick },
	        React.createElement(
	          'div',
	          { className: 'tDatePoint' },
	          date.getDate()
	        ),
	        React.createElement(
	          'div',
	          { className: 'tDayTip' },
	          dayType && t.dayTipMap[dayType] ? t.dayTipMap[dayType] : today == day ? '今天' : ''
	        )
	      );
	      week.push(dateContent);
	      date.setDate(date.getDate() + 1); //逐天递增
	    }
	
	    var flexBoxKey = 0;
	    //计算当前月天数
	    while (date.getMonth() == month) {
	      flexBoxKey++;
	      //判断上个月是否剩余满7天
	      if (week.length == 7) {
	        ret.push(React.createElement(
	          'div',
	          { key: month + flexBoxKey, className: 'tFBH' },
	          week
	        ));
	        week = [];
	      }
	      cls = 'tFB1 ';
	      day = format(date, '-');
	      cls += prop.minDate && day < prop.minDate || prop.maxDate && day > prop.maxDate ? ' tInvalid ' : '';
	      cls = cls + (today == day ? ' tNow ' : '');
	
	      //获取日期特殊标识符
	      if (code) {
	        var arr = day.split('-'),
	            tYear = arr[0],
	            tMonth = (arr[1] * 1).toString(),
	            tDay = (arr[2] * 1).toString();
	        if (code[tYear] && code[tYear][tMonth] && code[tYear][tMonth][tDay]) {
	          var tStatus = code[tYear][tMonth][tDay][1]; //1假2休3班
	          if (tStatus == 1 || tStatus == 2) {
	            cls = cls + ' tGray ';
	          } else if (tStatus == 3) {
	            cls = cls + ' tBlue ';
	          }
	        }
	      }
	      ;
	
	      //查询请假情况
	      if (existsLeave.leavingCalendar) {
	        var items = existsLeave.leavingCalendar,
	            flag = false;
	
	        if (items.length) {
	          for (var i = 0; i < items.length; i++) {
	            if (items[i]['dateStr'] == day) {
	              flag = true;
	            }
	          }
	          ;
	        }
	        ;
	      }
	      ;
	
	      dayType = this.isInRange(day);
	      if (dayType) {
	        cls = cls + ' tSelected';
	        cls = cls + (dayType == 'AM' ? ' tAM' : dayType == 'PM' ? ' tPM' : '');
	      }
	
	      dateContent = React.createElement(
	        'div',
	        { key: day, className: cls + ' tTap tOp', 'data-date': day, onClick: this.handleClick },
	        React.createElement(
	          'div',
	          { className: 'tDatePoint' },
	          date.getDate()
	        ),
	        React.createElement(
	          'div',
	          { className: 'tDayTip' },
	          t.props.singleMode && t.props.autoFinish ? flag ? React.createElement('s', { className: 'special-tag' }) : '' : dayType && t.dayTipMap[dayType] ? t.dayTipMap[dayType] : today == day ? '今天' : ''
	        )
	      );
	      week.push(dateContent);
	      date.setDate(date.getDate() + 1);
	    }
	
	    //计算下个月剩余补充天数
	    align = 7 - date.getDay();
	    if (align < 7) {
	      for (i = 0; i < align; i++) {
	        cls = 'tFB1 tOth ';
	        day = format(date, '-');
	        cls += prop.minDate && day < prop.minDate || prop.maxDate && day > prop.maxDate ? ' tInvalid ' : '';
	        cls = cls + (today == day ? ' tNow ' : '');
	
	        //获取日期特殊标识符
	        if (code) {
	          var arr = day.split('-'),
	              tYear = arr[0],
	              tMonth = (arr[1] * 1).toString(),
	              tDay = (arr[2] * 1).toString();
	          if (code[tYear] && code[tYear][tMonth] && code[tYear][tMonth][tDay]) {
	            var tStatus = code[tYear][tMonth][tDay][1]; //1假2休3班
	            if (tStatus == 1 || tStatus == 2) {
	              cls = cls + ' tGray ';
	            } else if (tStatus == 3) {
	              cls = cls + ' tBlue ';
	            }
	          }
	        }
	        ;
	
	        dayType = this.isInRange(day);
	        if (dayType) {
	          cls = cls + ' tSelected';
	          cls = cls + (dayType == 'AM' ? ' tAM' : dayType == 'PM' ? ' tPM' : '');
	        }
	
	        //管理日历时前后月不可点
	        if (t.props.singleMode && t.props.autoFinish) {
	          cls = cls + ' tInvalid ';
	        }
	        ;
	
	        dateContent = React.createElement(
	          'div',
	          { key: day, className: cls + ' tTap tOp', 'data-date': day, onClick: this.handleClick },
	          React.createElement(
	            'div',
	            { className: 'tDatePoint' },
	            date.getDate()
	          ),
	          React.createElement(
	            'div',
	            { className: 'tDayTip' },
	            dayType && t.dayTipMap[dayType] ? t.dayTipMap[dayType] : today == day ? '今天' : ''
	          )
	        );
	        week.push(dateContent);
	        date.setDate(date.getDate() + 1);
	      }
	      ret.push(React.createElement(
	        'div',
	        { key: 'alignlt7', className: 'tFBH' },
	        week
	      ));
	    } else {
	      ret.push(React.createElement(
	        'div',
	        { key: 'aligngt7', className: 'tFBH' },
	        week
	      ));
	    }
	    ;
	    return ret;
	  },
	
	  selectDay: function selectDay(e) {
	    var state = this.state,
	        cur = state.cur,
	        target = e.target,
	        day = target.getAttribute('data-day') || target.parentNode.getAttribute('data-day'),
	        state = this.state,
	        range = state.range;
	
	    if (range.length == 1) {
	      range[0].day = day;
	    } else if (range.length == 2) {
	      if (range[cur].date == range[1 - cur].date) {
	        range[cur].day = day;
	        range[1 - cur].day = day;
	      } else {
	        range[cur].day = day;
	      }
	    }
	
	    this.setState(state);
	  },
	
	  //cur(1代表正序,0代表反序)
	  getLeft: function getLeft(range, index) {
	    var t = this;
	    var am = React.createElement(
	      'div',
	      { key: 'tMorning', className: "tDay tMorning tTap tOp " + (range[index].day == 'AM' ? 'now' : ''),
	        onClick: this.selectDay, 'data-day': 'AM' },
	      React.createElement(
	        'span',
	        null,
	        t.dayTipMap['AM']
	      )
	    ),
	        pm = React.createElement(
	      'div',
	      { key: 'tAfternoon', className: "tDay tAfternoon tTap tOp " + (range[index].day == 'PM' ? 'now' : ''),
	        onClick: this.selectDay, 'data-day': 'PM' },
	      React.createElement(
	        'span',
	        null,
	        t.dayTipMap['PM']
	      )
	    );
	
	    if (range.length == 2 && range[0].date != range[1].date) {
	      if (this.state.cur == 1) {
	        pm = '';
	      } else if (this.state.cur == 0) {
	        am = '';
	      }
	      if (range[0].day == 'AM') {
	        range[0].day = 'FULL';
	      }
	      if (range[1].day == 'PM') {
	        range[1].day = 'FULL';
	      }
	    }
	    //是否显示上午、下午
	    if (t.props.showHalfDay) {
	      return [React.createElement(
	        'div',
	        { key: 'tFullDay', className: "tDay tFullDay tTap tOp " + (range[index].day == 'FULL' ? 'now' : ''),
	          onClick: this.selectDay, 'data-day': 'FULL' },
	        React.createElement(
	          'span',
	          null,
	          t.dayTipMap['FULL']
	        )
	      ), { am: am }, { pm: pm }];
	    } else {
	      return [React.createElement(
	        'div',
	        { key: 'tFullDay', className: "tDay tFullDay tTap tOp " + (range[index].day == 'FULL' ? 'now' : ''),
	          onClick: this.selectDay, 'data-day': 'FULL' },
	        React.createElement(
	          'span',
	          null,
	          t.dayTipMap['FULL']
	        )
	      )];
	    }
	  },
	
	  getText: function getText() {
	    var t = this;
	    var lang = t.props.lang;
	    var str = '';
	    switch (lang) {
	      case 'zh-cn':
	        str = t.state.date.getFullYear() + '年' + (t.state.date.getMonth() + 1) + '月';
	        break;
	      case 'en':
	        str = t.monthTitle[t.state.date.getMonth()] + ' ' + t.state.date.getFullYear();
	        break;
	    }
	    return str;
	  },
	
	  render: function render() {
	    var left = '';
	    var right = '';
	    var ret = '';
	    var selected = '';
	    var state = this.getState();
	    var range = state.range;
	    var cur = state.cur;
	    var len = range.length;
	    var showDefault = state.showDefault;
	    var _props = this.props;
	    var show = _props.show;
	    var left = _props.left;
	    var width = _props.width;
	    var top = _props.top;
	    var autoFinish = _props.autoFinish;
	    var singleMode = _props.singleMode;
	    var other = _objectWithoutProperties(_props, ['show', 'left', 'width', 'top', 'autoFinish', 'singleMode']);
	    var t = this;
	
	    if (showDefault && !singleMode) {
	      if (len) {
	        left = this.getLeft(range, cur, true);
	        selected = range[cur].date.substring(8).replace(/^0/, '');
	      }
	    } else {
	      if (len == 2) {
	        left = this.getLeft(range, cur);
	        selected = range[cur].date.substring(8).replace(/^0/, '');
	      } else if (len == 1) {
	        left = this.getLeft(range, 0);
	        selected = range[0].date.substring(8).replace(/^0/, '');
	      } else if (len == 0) {}
	    }
	    if (!singleMode) {
	      right = React.createElement(
	        'div',
	        { className: "tReset" + (len == 0 ? " tGray" : ""), onClick: this.clear },
	        t.button['clear']
	      );
	    }
	
	    if (show) {
	      ret = this.handleDate();
	    }
	
	    return React.createElement(
	      'div',
	      { className: "tCalendar " + (showDefault ? "tDefault " : "") + t.props.className,
	        style: { 'display': show ? 'block' : 'none' } },
	      React.createElement(
	        'div',
	        { className: 'tTool tFBH tFBAC' },
	        React.createElement('div', { className: 'tFB1' }),
	        React.createElement(
	          'div',
	          { className: 'tBtn tPrevMonth tTap tOp', onClick: t.handlePrev },
	          '<'
	        ),
	        React.createElement(
	          'span',
	          { className: 'tText' },
	          this.getText()
	        ),
	        React.createElement(
	          'div',
	          { className: 'tBtn tNextMonth tTap tOp', onClick: t.handleNext },
	          '>'
	        ),
	        React.createElement('div', { className: 'tFB1' })
	      ),
	      React.createElement(
	        'div',
	        { className: 'tWeek tFBH' },
	        t.weekTitle.map(function (item, index) {
	          return React.createElement(
	            'div',
	            { className: 'tFB1 tFBAC', key: index },
	            item
	          );
	        })
	      ),
	      React.createElement(
	        'div',
	        { className: 'tMonth' },
	        ret
	      ),
	      React.createElement(
	        'div',
	        { className: classnames({
	            "tHalfWrap tFBH tFBAC": true,
	            tDN: singleMode
	          }) },
	        React.createElement(
	          'div',
	          { className: 'selectedDay' },
	          selected
	        ),
	        left,
	        React.createElement('div', { className: 'tFB1' }),
	        right
	      ),
	      React.createElement(
	        'div',
	        { className: classnames({
	            tOperate: true,
	            tDN: singleMode && autoFinish
	          }) },
	        React.createElement(
	          'span',
	          { className: "tCancel tTap tOp" + (len == 0 ? " tGray" : ""),
	            onClick: this.onCancel },
	          t.button['cancel']
	        ),
	        React.createElement(
	          'span',
	          { className: "tConfirm tTap tOp" + (len == 0 ? " tGray" : ""),
	            onClick: this.onConfirm },
	          t.button['confirm']
	        )
	      )
	    );
	  }
	});
	
	Calendar.defaultProps = {
	  className: '',
	  show: false,
	  calendarCode: {},
	  existsLeave: {},
	  defaultValue: "",
	  lang: "zh-cn",
	  autoFinish: false,
	  singleMode: false,
	  onCancel: function onCancel() {},
	  getValue: function getValue() {},
	  handleSwitch: function handleSwitch() {}
	};
	
	Calendar.propTypes = {
	  className: React.PropTypes.string,
	  show: React.PropTypes.bool, // 是否显示
	  calendarCode: React.PropTypes.object, // 后端传来的 code
	  existsLeave: React.PropTypes.object, // 查询当前月份的请假数据
	  defaultValue: React.PropTypes.string, // 默认值
	  lang: React.PropTypes.string, // 国际化语言
	  autoFinish: React.PropTypes.bool, // 是否不需要点击确定，直接返回值，必须在 singleMode 开启的情况下才有效
	  singleMode: React.PropTypes.bool, // 是否是单选模式
	  onCancel: React.PropTypes.func, // 取消选择时触发的回调
	  getValue: React.PropTypes.func, // 返回值时触发的回调
	  handleSwitch: React.PropTypes.func // 切换日期进行数据查询
	};
	
	function zero(n) {
	  return n > 9 ? n : '0' + n;
	}
	function format(date, sep) {
	  sep = sep || '';
	  return '' + date.getFullYear() + sep + zero(date.getMonth() + 1) + sep + zero(date.getDate());
	}
	
	module.exports = Calendar;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };
	
	var thrower = function(error){
	    throw error;
	};
	
	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }
	
	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }
	
	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }
	
	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];
	
	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;
	
	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };
	
	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }
	
	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";
	
	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }
	
	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};
	
	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };
	
	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }
	
	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);
	
	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });
	
	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;
	
	}
	
	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }
	
	    var fn = left || right;
	
	    return function(args){
	        return fn.apply(this, args);
	    };
	};
	
	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};
	
	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }
	
	    return left || right;
	}
	
	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};
	
	
	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};
	
	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};
	


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  "zh-cn": {
	    weekTitle: ['日', '一', '二', '三', '四', '五', '六'],
	    monthTitle: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	    dayTipMap: {
	      'FULL': '全天',
	      'AM': '上午',
	      'PM': '下午'
	    },
	    button: {
	      'confirm': '确定',
	      'cancel': '取消',
	      'clear': '清空'
	    }
	  },
	  "en": {
	    weekTitle: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	    monthTitle: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    dayTipMap: {
	      'FULL': 'FULL',
	      'AM': 'AM',
	      'PM': 'PM'
	    },
	    button: {
	      'confirm': 'OK',
	      'cancel': 'Cancel',
	      'clear': 'Clear'
	    }
	  }
	};

/***/ }
/******/ ])
//# sourceMappingURL=app.js.map