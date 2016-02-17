let {GroupList,Tab,Icon} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    location.hash = '/result';
  }

  render() {
    let t = this;
    return (
      <Tab scroll={false} className="tPageList">
        <Tab.item title="全部">
          <GroupList title="2015年" itemIndent="15">
            <div className="tPR tP5_0 tH80" onClick={t.handleClick}>
              <div className="tFS16 tLH44 tFC42">张三丰</div>
              <div className="tFS12 tFC9e">来访时间：2015-06-30～2015-07-01</div>
              <div className="tPA tFS12 status-tip tFCfb8c00">已完成</div>
            </div>
            <div className="tPR tP5_0 tH80" onClick={t.handleClick}>
              <div className="tFS16 tLH44 tFC42">张三丰</div>
              <div className="tFS12 tFC9e">来访时间：2015-06-30～2015-07-01</div>
              <div className="tPA tFS12 status-tip tFC9e">未完成</div>
            </div>
          </GroupList>
          <GroupList title="2014年" itemIndent="15">
            <div className="tPR tP5_0 tH80" onClick={t.handleClick}>
              <div className="tFS16 tLH44 tFC42">张三丰</div>
              <div className="tFS12 tFC9e">来访时间：2014-06-30～2015-07-01</div>
              <div className="tPA tFS12 status-tip tFCfb8c00">已完成</div>
            </div>
          </GroupList>
        </Tab.item>
        <Tab.item title="已处理">
          <GroupList title="2015年" itemIndent="15">
            <div className="tPR tP5_0 tH80" onClick={t.handleClick}>
              <div className="tFS16 tFC42 tLH44 tVALM">
                <Icon id="people" className="people-icon"/><span>张三丰</span>
              </div>
              <div className="tFS12 tFC9e">来访时间：2015-06-30～2015-07-01</div>
              <div className="tPA tFS12 status-tip tFCfb8c00">已完成</div>
            </div>
          </GroupList>
          <GroupList title="2014年" itemIndent="15">
            <div className="tPR tP5_0 tH80" onClick={t.handleClick}>
              <div className="tFS16 tFC42 tLH44 tVALM">
                <Icon id="people" className="people-icon"/><span>张三丰</span>
              </div>
              <div className="tFS12 tFC9e">来访时间：2014-06-30～2015-07-01</div>
              <div className="tPA tFS12 status-tip tFCfb8c00">已完成</div>
            </div>
          </GroupList>
        </Tab.item>
        <Tab.item title="未处理">
          <GroupList itemIndent="15" className="tMT10">
            <div className="tPR tP5_0 tPB5" onClick={t.handleClick}>
              <div className="tFS16 tFC42 tLH44 tBBe6">张三丰</div>
              <ul className="tP10_0 tLH24 tFS12 tFC9e">
                <li>来访人数：3人</li>
                <li>园区及楼号：西溪园区/3号楼</li>
                <li>访客手机：13300000000</li>
                <li>开始时间：2015-09-01</li>
                <li>结束时间：2015-09-06</li>
              </ul>
              <div className="tPA tFC75 tFS12 status-tip">合作伙伴</div>
            </div>
          </GroupList>
          <GroupList itemIndent="15">
            <div className="tPR tP5_0 tPB5" onClick={t.handleClick}>
              <div className="tFS16 tFC42 tLH44 tBBe6">张三丰</div>
              <ul className="tP10_0 tLH24 tFS12 tFC9e">
                <li>来访人数：3人</li>
                <li>园区及楼号：西溪园区/3号楼</li>
                <li>访客手机：13300000000</li>
                <li>开始时间：2015-09-01</li>
                <li>结束时间：2015-09-06</li>
              </ul>
              <div className="tPA tFC75 tFS12 status-tip">合作伙伴</div>
            </div>
          </GroupList>
        </Tab.item>
      </Tab>
    )
  }
}

module.exports = Page;
