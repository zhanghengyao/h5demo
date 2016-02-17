var reactMixin = require('react-mixin');
var {Button} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log('onClick')
  }

  render() {
    return (
      <div className="page-button">
        <Button type="primary" onClick={this.handleClick}>主 按 钮</Button>
        <Button type="secondary" onClick={this.handleClick}>次 按 钮</Button>
        <Button type="danger" onClick={this.handleClick}>警告按钮</Button>
        <Button type="primary" size="m" onClick={this.handleClick}>中按钮</Button>
        <Button type="primary" size="s" onClick={this.handleClick}>小按钮</Button>
        <Button disabled={true}>不可点击</Button>
        <Button disabled={true} size="m">不可点击</Button>
        <Button disabled={true} size="s">不可点击</Button>
      </div>
    );
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
