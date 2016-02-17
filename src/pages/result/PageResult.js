let {Group,Field} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let t = this;
    return (
      <div>
        <div className="tNotice">
          公告信息公告信息公告信息公告信息公告信息
        </div>
        <div className="tMT10 tMB20">
          <Group>
            <Group.List lineIndent={14} itemIndent={[14,14]} className="tReadOnly">
              <Field label="来访时间">2015-09-01</Field>
              <Field label="结束时间">2015-09-06</Field>
              <Field label="来访目的">合作伙伴</Field>
              <Field label="访客姓名">张三丰</Field>
              <Field label="访客手机">13000000000</Field>
              <Field label="园区及楼号">西溪园区/3号楼</Field>
              <Field label="来访人数">3人</Field>
              <Field label="进入工作区">否</Field>
              <Field label="WIFI">是</Field>
              <Field label="备注" multiLine={true}>
                <div className="tPT10 tPB10 tLH1_5">没有备注<br/>没有备注</div>
              </Field>
              <Field label="证明">
                <img src="http://gtms01.alicdn.com/tps/i1/TB1Fhk7IVXXXXbmXpXX8X4g_XXX_40x40.jpg" alt=""
                     className="tFR"/>
              </Field>
            </Group.List>
          </Group>
        </div>
      </div>
    )
  }
}

module.exports = Page;
