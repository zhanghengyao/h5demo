var reactMixin = require('react-mixin');
var {Group, Icon} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var t = this;
    return (<div className="projectPage">
      <Group>
        <Group.Head>
          阿里内外
        </Group.Head>

        <Group.List lineIndent={14} itemIndent={[14,14]}>
          <div className="project">
            欢行-出租车
          </div>
          <div className="project">
            欢行-专车/快车
          </div>
          <div className="project">
            欢行-借款
          </div>
          <div className="project">
            移动商保
          </div>
          <div className="project">
            全球假期系统
          </div>
        </Group.List>
      </Group>
      <Group>
        <Group.Head>
          钉钉
        </Group.Head>
        <Group.List lineIndent={14} itemIndent={[14,14]}>
          <div className="project">
            移动审批
          </div>
          <div className="project">
            定制化移动审批
          </div>
          <div className="project">

          </div>
        </Group.List>
      </Group>
      <Group>
        <Group.Head>
          来往
        </Group.Head>
        <Group.List lineIndent={14} itemIndent={[14,14]}>
          <div className="project">
            老扎堆广场
          </div>
          <div className="project">
            新版本功能宣传页
          </div>
        </Group.List>
      </Group>
    </div>);
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
