var reactMixin = require('react-mixin');
var {Slide, Icon} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      units: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 比例布局
      flexboxes: [2, 3, 4] // 等分布局
    }
  }

  render() {
    var t = this;
    return (<div className="layoutPage">
      <div className="tPL10 tPT20 tFAC">比例布局</div>
      {t.state.units.map(function (unit) {
        return <div className="tFBH demoRow">
          <div className={`tW${unit}R color1`}>{unit}</div>
          <div className="tFB1 color2">{10 - unit}</div>
        </div>
      })}

      <div className="tFBH demoRow">
        <div className="tW1R color1">1</div>
        <div className="tW2R color2">2</div>
        <div className="tW3R color1">3</div>
        <div className="tFB1 color2">4</div>
      </div>

      <div className="tFBH demoRow">
        <div className="tW2R color1">2</div>
        <div className="tW3R color2">3</div>
        <div className="tFB1 color1">5</div>
      </div>

      <div className="tFBH demoRow">
        <div className="tW3R color1">3</div>
        <div className="tFB1 color2">4</div>
        <div className="tW3R color1">3</div>
      </div>

      <div className="tPL10 tPT20 tFAC">等分布局</div>
      <div className="tFBH demoRow">
        <div className="tFB1 color1">2等分</div>
        <div className="tFB1 color2">2等分</div>
      </div>
      <div className="tFBH demoRow">
        <div className="tFB1 color1">3等分</div>
        <div className="tFB1 color2">3等分</div>
        <div className="tFB1 color1">3等分</div>
      </div>
      <div className="tFBH demoRow">
        <div className="tFB1 color1">4等分</div>
        <div className="tFB1 color2">4等分</div>
        <div className="tFB1 color1">4等分</div>
        <div className="tFB1 color2">4等分</div>
      </div>
    </div>);
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
