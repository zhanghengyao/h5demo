let {Group,TextField,TextareaField,NumberField,Field,Icon,SelectField,Button,Checkbox,PhotoField,Tip,OnOffField} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);
    let dates = SelectField.formatDataValue([
      [2015, 2016],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    ]);
    let relations = SelectField.formatDataValue([
      '朋友',
      '家人',
      '合作伙伴',
      '供应商'
    ]);
    let buildings = SelectField.formatDataValue([
      ['西溪', '黄龙', '龙章'],
      ['1号楼', '2号楼', '3号楼', '4号楼']
    ]);
    this.state = {
      dates: dates.data,
      relations: relations.data,
      buildings: buildings.data,
      required1: '',
      required2: dates.value,
      required3: dates.value,
      required4: relations.value,
      required5: '',
      required6: '',
      required7: buildings.value,
      required8: '',
      optional9: false,
      optional10: true,
      optional11: '',
      disabled: true,
      checked: true
    };
  }

  handleChange(label, value) {
    let t = this;
    t.setState({
      [label]: value
    }, () => {
      let disabled = false;
      for (let key in t.state) {
        if (/^required\d+$/.test(key) && !t.state[key]) {
          disabled = true;
          break;
        }
      }
      if (!t.state.checked) {
        disabled = true;
      }
      if (disabled !== t.state.disabled) {
        t.setState({
          disabled: disabled
        });
      }
    });
  }

  formatDate(values) {
    return values.map((value) => {
      return value.text < 10 ? '0' + value.text : value.text;
    }).join('-');
  }

  formatBuilding(values) {
    return values.map((value) => {
      return value.text;
    }).join('/');
  }

  handleClick() {
    Tip.show({
      icon: 'success',
      text: '提交成功',
      onHide: function () {
        location.hash = '/result';
      }
    });
  }

  render() {
    let t = this;
    return (
      <div>
        <div className="tNotice tOmit">
          10.1 - 10.8 园区封园，不接受入园申请，请提前做好准备。
        </div>

        <Group>
          <Group.Head>必填</Group.Head>
          <Group.List lineIndent={14} itemIndent={[14, 14]}>
            <TextField label="来访单位" placeholder="请输入" value={t.state.required1}
                       onChange={t.handleChange.bind(t, 'required1')}/>
            <SelectField label="来访时间" data={t.state.dates} value={t.state.required2}
                         formatter={t.formatDate.bind(t)} onChange={t.handleChange.bind(t, 'required2')}/>
            <SelectField label="结束时间" data={t.state.dates} value={t.state.required3}
                         formatter={t.formatDate.bind(t)} onChange={t.handleChange.bind(t, 'required3')}/>
            <SelectField label="来访目的" data={t.state.relations} value={t.state.required4}
                         onChange={t.handleChange.bind(t, 'required4')}/>
            <TextField label="访客姓名" placeholder="请输入" value={t.state.required5}
                       onChange={t.handleChange.bind(t, 'required5')}/>
            <NumberField label="访客手机" placeholder="请输入" value={t.state.required6}
                         onChange={t.handleChange.bind(t, 'required6')}/>
            <SelectField label="园区及楼号" data={t.state.buildings} value={t.state.required7}
                         formatter={t.formatBuilding.bind(t)}
                         onChange={t.handleChange.bind(t, 'required7')}/>
            <NumberField label="来访人数" placeholder="请输入" value={t.state.required8}
                         onChange={t.handleChange.bind(t, 'required8')}/>
            <OnOffField label="进入工作区" on={t.state.optional9}
                        onChange={t.handleChange.bind(t, 'optional9')}/>
            <OnOffField label="WIFI" on={t.state.optional10}
                        onChange={t.handleChange.bind(t, 'optional10')}/>
          </Group.List>
        </Group>
        <Group>
          <Group.Head>选填</Group.Head>
          <Group.List lineIndent={14} itemIndent={[14, 14]}>
            <TextareaField label="备注" placeholder="请输入" value={t.state.optional11}
                           onChange={t.handleChange.bind(t, 'optional11')}/>
            <PhotoField className="tField" label="证明" icon="tingle-photo-field-camera"/>
            <div className="tFBH tFBAC tFS14 tSelectField">
              <div className="tFB1 tPR tFC9 tFieldLabel" style={{whiteSpace:'nowrap'}}>
                <Checkbox className="tMR10" on={t.state.checked}
                          onChange={t.handleChange.bind(t, 'checked')}/>同意<a href="javascript:;">《阿里巴巴访客协议》</a>
              </div>
            </div>
          </Group.List>
          <div style={{padding: '30px 15px'}}>
            <Button type="primary" onClick={this.handleClick} disabled={t.state.disabled}>提交</Button>
          </div>
        </Group>
      </div>
    )
  }
}

module.exports = Page;
