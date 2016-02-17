let {Group,Tab,Icon} = Tingle;


class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    //location.hash = '/result';
  }

  render() {
    let t = this;
    return (
      <Tab className="tPageList">
        <Tab.item title="贡献者">
          <Group>
            <Group.List lineIndent={14} itemIndent={[14,14]}>

            </Group.List>
          </Group>
        </Tab.item>
        <Tab.item title="参与者">
          <Group >
            <Group.List lineIndent={14} itemIndent={[14,14]}>

            </Group.List>
          </Group>
        </Tab.item>
      </Tab>
    )
  }
}

module.exports = Page;
