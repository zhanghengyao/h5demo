/**
 * 先临时写个Grid组件
 */

var classnames = require('classnames');

class GridRow extends React.Component {

  constructor(props) {
    super(props);
  }

  // 根据col的设置，补充空的item
  _renderEmptyitem() {
    let t = this;
    let emptyItemNumber = t.props.col - React.Children.count(t.props.children);
    let ret = [];
    while (emptyItemNumber--) {
      ret.push(<div className="tFB1 tFBV tFBAC tFBJC tGridItem" style={{height: "" + 10/t.props.col + "rem"}}></div>);
    }
    return ret;
  }

  render() {
    let t = this;

    return (<div className="tFBH tGridRow">
      {React.Children.map(t.props.children, function (child) {
        return <div className="tFB1 tFBV tFBAC tFBJC tGridItem" style={{height: "" + 10/t.props.col + "rem"}}>
          {child}
        </div>;
      })}
      {t._renderEmptyitem()}
    </div>);
  }
}

GridRow.defaultProps = {
  col: 4
}

GridRow.propTypes = {
  col: React.PropTypes.number
}


class Grid extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderGridRow(rowIndexArray) {
    var t = this;
    return <GridRow col={t.props.col}>
      {rowIndexArray.map(function (index) {
        return t.props.children[index];
      })}
    </GridRow>
  }

  _groupChildrenIndexByRow() {
    var t = this;
    let rowIndexes = [];
    let childrenCount = React.Children.count(t.props.children);

    let dummyIndexArray = [];
    let dummyIndex = 0;
    while (childrenCount--) {
      dummyIndexArray.push(dummyIndex++);
    }

    while (dummyIndexArray.length) {
      rowIndexes.push(dummyIndexArray.splice(0, t.props.col));
    }

    return rowIndexes;
  }

  render() {
    let t = this;
    let groupIndexes = t._groupChildrenIndexByRow();

    return (<div className={classnames('tGrid', t.props.className)}>
      {groupIndexes.map(function (rowIndexes) {
        return t._renderGridRow(rowIndexes);
      })}
    </div>);
  }
}

Grid.defaultProps = {
  className: '',
  col: 4
}

Grid.propTypes = {
  className: React.PropTypes.string,
  col: React.PropTypes.number
}

module.exports = Grid;
