class Module extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let t = this;
    return (
      <div className="blackboard-organization">
        <div className="count">{t.props.count}</div>
        <div className="organizationCount">编制人数：{t.props.oCount}</div>
      </div>
    )
  }
}

Module.displayName = "BlackBoardOrganization";

module.exports = Module;
