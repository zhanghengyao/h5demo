class Module extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table className="blackboard-table">
        <tbody>
        {this.props.data.map(function (d) {
          return (
            <tr>
              {d.map(function (v) {
                let child = '';
                if (v.highlight) {
                  child = <span className="blackboard-highlight">{v.title}</span>
                } else if (v.strong) {
                  child = <span className="blackboard-strong">{v.title}</span>
                } else {
                  child = <span className="blackboard-normal">{v.title}</span>
                }
                return (
                  <td>{child}</td>
                )
              })}
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}

Module.displayName = "BlackBoardTable";

module.exports = Module;
