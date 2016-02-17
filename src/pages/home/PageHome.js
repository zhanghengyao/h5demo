var reactMixin = require('react-mixin');
var {Slide, Icon} = Tingle;

let Grid = require('./Grid');

let isSupportWebp = require('../../components/webpSupport').isSupportWebp();

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.tingleIntroBgColors = [
      '#de3e3e', // 红
      '#FFB600', // 黄
      '#4E9C0B', // 绿
      '#3053AB', // 蓝
    ];
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
    }
  }

  getTingleBgColorIndex() {
    let t = this;
    let currentIndex = t.state.tingleIntroBgColorIndex;
    let nextIndex = currentIndex === t.tingleIntroBgColors.length - 1 ? 0 : currentIndex + 1;
    return nextIndex;
  }

  handleChangeColor() {
    let t = this;
    t.setState({
      tingleIntroBgColorIndex: t.getTingleBgColorIndex()
    });
  }

  handleRoute(route) {
    let t = this;
    switch (route) {
      case "feedback":
        WindVane.call('WVNative', 'sendPost', {
          'bizType': 'Create', // 业务类型(Create, Forward, Comment)
          'title': '发送内外新分享', // 大标题
          'postScope': 'public', // public, private
          'content': '#意见反馈# ', // 默认内容
          'placeholderText': '请输入您要反馈给tingle小组的意见，或bug', // placeholder
          'groupId': '17122'
        }, function () {
        });
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

  handleSlideImgClick() {
    location.href = "http://ux.alibaba.net/docs/tingle-getting-started.html";
  }

  render() {
    var t = this;
    return (<div className="homePage">
      <Slide className="homeSlide" showNav={true} auto={true}>
        <img onClick={t.handleSlideImgClick.bind(t)}
             src={"https://gw.alicdn.com/tps/TB18IPLKFXXXXc9XFXXXXXXXXXX-1242-747.jpg_620x10000.jpg" + (isSupportWebp ? "_.webp" : "")}/>
        <div className="tFBH tFBAC tFBJC tingleIntro"
             style={{backgroundColor: t.tingleIntroBgColors[t.state.tingleIntroBgColorIndex]}}
             onClick={t.handleChangeColor.bind(t)}>
          <Icon id="tingle" className="tingleSvg"/>
        </div>
      </Slide>
      <Grid col={3} className="tBCf">
        {t.state.icons.map(function (item, index) {
          return <div className="tFBV tFBAC tFBJC homeGridItem tTE" onClick={t.handleRoute.bind(t, item.route)}>
            <div className="homeGridIcon">
              <Icon id="show-icon-bg" className={"iconBg iconColor" + index}/>
              <Icon id={item.icon} className="iconIs"/>
            </div>
            <div className="tFC6 iconText">{item.text}</div>
          </div>
        })}
      </Grid>
    </div>);
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
