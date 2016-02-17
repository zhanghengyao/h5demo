let isSupportWebp = require('../../components/webpSupport').isSupportWebp();
let {Avatar} = Tingle;
class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    let t = this;
    WindVane.call('WVNative', 'showPersonProfile', {
      'userId': t.props.itemData.workId
    }, function () {
    })
  }

  _getAvatar(data) {
    //if (data.imageUrl) {
    //  return (<img className="pic" src={data.imageUrl + '_200x200xz.jpg' + (isSupportWebp ? '_.webp' : '')}/>);
    //} else {
      return (<div>
        <Avatar size="40px" name={data.nickName}/>
      </div>);
    //}
  }

  render() {
    let t = this;
    let data = t.props.itemData;
    let style = data.labelStyle || {};
    return (
      <div className="about-item tFBH tFBAC" onClick={t.handleClick.bind(t)}>
        {t._getAvatar(data)}
        <p className="info tFB1">
          <span className="nickname" style={style}>{data.name}({data.nickName})</span>
        </p>
      </div>
    )
  }
}

module.exports = Item;
