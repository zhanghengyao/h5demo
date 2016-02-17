/*
 * @Author: caoke
 * @Date:   2015-08-28 13:24:25
 * @Last Modified by:   caoke
 * @Last Modified time: 2015-09-13 18:24:07
 */

let {Group,Field,Icon} = Tingle;
let Calendar = require('../../components/Calendar');

class Module extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      result: '选中的日期范围'
    };
  }

  handlerCalendarShow() {
    var t = this;
    t.setState({
      show: true
    });
  }

  handlerCalendarChange(values) {
    var t = this;
    t.setState({
      result: values.startDate + ' ~ ' + values.endDate,
      show: false
    });
  }

  handlerCalendarClose() {
    var t = this;
    t.setState({
      show: false
    });
  }

  render() {
    var t = this;
    return (
      <div className="mPageCalendar">
        <Group>
          <Group.Head>
            选择日期范围
          </Group.Head>
          <Group.List lineIndent={14} itemIndent={[14,14]}>
            <Field label="选择日期范围">
              <div className="tFBH tFBAC" onClick={t.handlerCalendarShow.bind(t)}>
                <span className="tFB1">{t.state.result}</span>
                <Icon className="tSelectFieldIcon" id="tingle-select-field-arrow-right"/>
              </div>
            </Field>
          </Group.List>
        </Group>
        <Calendar show={t.state.show} onCancel={t.handlerCalendarClose.bind(t)}
                  getValue={t.handlerCalendarChange.bind(t)}/>
      </div>
    );
  }
}

module.exports = Module;
