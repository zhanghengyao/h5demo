var reactMixin = require('react-mixin');
var {Slide, Icon} = Tingle;

let Grid = require('../home/Grid');

class Page extends React.Component {

  constructor(props) {
    super(props);
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
    }
  }

  render() {
    var t = this;
    return (<div className="iconPage">
      <Grid col="3" className="tBCf">
        {t.state.icons.map(function (item, index) {
          return <div className="tFBV tFBAC tFBJC iconGridItem tTE">
            <div className="iconGridIcon">
              <Icon id="show-icon-bg" className="iconBg"/>
              <Icon id={item.icon} className="iconIs"/>
            </div>
            <div className="tFC6 iconText">{item.text || item.icon}</div>
          </div>
        })}
      </Grid>
    </div>);
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
