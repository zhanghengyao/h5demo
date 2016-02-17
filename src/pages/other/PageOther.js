var reactMixin = require('react-mixin');
var {Slide, Icon} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var t = this;
    return (<div className="iconPage">

    </div>);
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
