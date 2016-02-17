var classnames = require('classnames');

var i18n = require('./i18n');

var Calendar = React.createClass({
  getInitialState: function () {
    var ra, suf, pre,
      t = this,
      cur = 0,
      now = new Date(),
      range = [],
      date = new Date(),
      now = new Date(),
      defaultDate = this.props.defaultDate; //[2015-05-120/2015-05-201]

    now.setDate(now.getDate()); //设置为当日的明天
    defaultDate = defaultDate || (format(now, '-') + '2');

    t.weekTitle = i18n[t.props.lang].weekTitle;
    t.monthTitle = i18n[t.props.lang].monthTitle;
    t.dayTipMap = i18n[t.props.lang].dayTipMap;
    t.button = i18n[t.props.lang].button;

    if (defaultDate) {
      ra = defaultDate.split('/'); //["2015-05-120", "2015-05-201"]
      suf = ra[0].substring(10); //am-pm
      pre = ra[0].substring(0, 10); //日期
      date = new Date(pre);
      date.setDate(1); //将当前日期的设置为本月1号
      date.setMonth(parseInt(ra[0].substring(5, 7), 10) - 1); //设置为自定义的月份(5月)

      range.push({date: pre, day: suf == '1' ? 'PM' : suf == '0' ? 'AM' : 'FULL'});

      //结束时间
      if (ra[1]) {
        suf = ra[1].substring(10);
        pre = ra[1].substring(0, 10);
        if (pre == range[0].date) { //如果结束日期等于开始日
          if (ra[1].substring(10) == range[0].day) { //同时上下午相同
            range.push({date: pre, day: range[0].day});
          } else {
            range.push({date: pre, day: 'FULL'});
          }
        } else {
          range.push({date: pre, day: suf == '0' ? 'AM' : 'PM'});
        }
        cur = 1;
      } else {
        range.push({date: pre, day: suf == '0' ? 'AM' : suf == '1' ? 'PM' : 'FULL'});
      }
    }

    return {
      date: date,
      range: range,
      cur: cur,
      showDefault: true,
      showState: 1
    };
  },

  getState: function () {
    var state = this.state.showState < 2 ? this.state : this.getInitialState();
    this.state = state;
    return this.state;
  },

  getDefaultProps: function () {
    return {
      today: format(new Date(), '-'),
      minDate: '0000-00-00',
      maxDate: '9999-99-99'
    }
  },

  handlePrev: function () {
    var t = this,
      state = t.state,
      date = state.date;
    date.setMonth(date.getMonth() - 1);
    state.date = date;
    t.setState(state);
    t.props.handleSwitch(date);
  },

  handleNext: function () {
    var t = this,
      state = t.state,
      date = state.date;
    date.setMonth(date.getMonth() + 1);
    state.date = date;
    t.setState(state);
    t.props.handleSwitch(date);
  },

  handleClick: function (e) {
    var t = this,
      state = this.state,
      cur = state.cur,
      range = state.range,
      target = e.target,
      showDefault = state.showDefault,
      date = target.getAttribute('data-date');

    // 如果是单选模式，那么就把range数组置空，使其一直维持在只有一个元素的状态
    if (t.props.singleMode && range.length > 0) {
      range = [];
      cur = 0;
    }

    //当含有invalid标识时不可选
    target = date ? target : target.parentNode;
    if (target.classList && target.classList.contains('tInvalid') || target.className.indexOf('tInvalid') > -1) {
      return
    }

    date = target.getAttribute('data-date');

    if (showDefault) {
      state.showDefault = false;
      range = [];
    }

    if (range.length == 0) {
      range[0] = {
        date: date,
        day: 'FULL'
      };
      cur = 0;
    } else if (range.length == 1) {
      if (date < range[0].date) {
        range[1] = range[0];
        range[0] = {
          date: date,
          day: 'FULL'
        };
        cur = 0;
      } else if (date == range[0].date) {
        this.reset();
        return;
      } else {
        range[1] = {
          date: date,
          day: 'FULL'
        };
        cur = 1;
      }
    } else {
      if (date < range[0].date) {
        range[0] = {
          date: date,
          day: 'FULL'
        };
        cur = 0;
      } else if (date == range[1].date) {
        if (range[1].date == range[0].date) {
          this.reset();
          return;
        }
        cur = 1;
      } else {
        range[1] = {
          date: date,
          day: 'FULL'
        };
        cur = 1;
      }
    }

    state.range = range;
    state.cur = cur;
    this.setState(state, function () {
      if (t.props.singleMode && t.props.autoFinish) { // 如果是自动完成模式，则不需要点击确定，直接触发 getValue()
        this.props.getValue({startDate: range[0].date, startDateType: 'AM', endDate: range[0].date, endDateType: 'PM'});
      }
    });
  },

  clear: function () {
    this.reset();
  },

  reset: function (showState) {
    var date = new Date();
    this.setState({
      date: date,
      range: [],
      cur: 0,
      showDefault: true,
      showState: showState || 1
    });
  },

  onCancel: function () {
    this.reset(2);
    var onCancel = this.props.onCancel;
    onCancel();
  },

  onConfirm: function () {
    var day0, day1,
      t = this,
      range = this.state.range;
    if (range.length == 0) {
      new Prompt({
        content: '请选择时间',
        duration: 2
      });
      return;
    }
    if (range[1]) { //选择多天时
      day0 = range[0].day;
      day1 = range[1].day;
      this.props.getValue({startDate: range[0].date, startDateType: day0, endDate: range[1].date, endDateType: day1});
    } else { //选择单天时
      if (range[0].day == 'FULL') { //若为“全天”时，则按照“上午” 到 “下午”传递
        this.props.getValue({startDate: range[0].date, startDateType: 'AM', endDate: range[0].date, endDateType: 'PM'});
      } else {
        this.props.getValue({
          startDate: range[0].date,
          startDateType: range[0].day,
          endDate: range[0].date,
          endDateType: range[0].day
        });
      }
    }
    this.reset(2);
  },

  isInRange: function (day) {
    var state = this.state,
      range = state.range,
      cur = this.state.cur;
    if (range.length == 1) {
      if (day == range[0].date) {
        return range[0].day;
      }
    } else if (range.length == 2) {
      if (day > range[0].date && day < range[1].date) {
        return 'selectedBetween';
      } else if (day == range[0].date && day == range[1].date) {
        if (range[0].day == range[1].day) {
          return range[0].day;
        } else {
          return 'FULL';
        }
      } else if (day == range[0].date) {
        return range[0].day;
      } else if (day == range[1].date) {
        return range[1].day;
      }
    }
  },

  handleDate: function () {
    var i, align, cls, day, dateContent, dayType, dayTip,
      t = this,
      ret = [],
      week = [],
      state = this.state,
      date = new Date(state.date),
      prop = this.props,
      today = prop.today,
      code = prop.calendarCode,
      existsLeave = prop.existsLeave,
      range = state.range,
      month = date.getMonth();

    date.setDate(1); //设置到当前月的第一天
    align = date.getDay(); //当月首天对应的星期
    date.setDate(date.getDate() - align); //设置上月在本月显示的多余天数

    //计算上个月剩余补充天数
    for (i = 0; i < align; i++) {
      cls = 'tFB1 tOth ';
      day = format(date, '-');
      cls += (prop.minDate && day < prop.minDate) || (prop.maxDate && day > prop.maxDate) ? ' tInvalid ' : '';
      cls = cls + (today == day ? ' tNow ' : '');

      //获取日期特殊标识符
      if (code) {
        var arr = day.split('-'),
          tYear = arr[0],
          tMonth = (arr[1] * 1).toString(),
          tDay = (arr[2] * 1).toString();
        if (code[tYear] && code[tYear][tMonth] && code[tYear][tMonth][tDay]) {
          var tStatus = code[tYear][tMonth][tDay][1];//1假2休3班
          if (tStatus == 1 || tStatus == 2) {
            cls = cls + ' tGray ';
          } else if (tStatus == 3) {
            cls = cls + ' tBlue ';
          }
        }
      }
      ;

      //获取当前区间(am/pm/full)，根据不同区间生成不同的cls
      dayType = this.isInRange(day);
      if (dayType) {
        cls = cls + ' tSelected';
        cls = cls + (dayType == 'AM' ? ' tAM' : dayType == 'PM' ? ' tPM' : '');
      }

      //管理日历时前后月不可点
      if (t.props.singleMode && t.props.autoFinish) {
        cls = cls + ' tInvalid ';
      }
      ;

      dateContent = <div key={day} className={cls + ' tTap tOp'} data-date={day} onClick={this.handleClick}>
        <div className="tDatePoint">
          {date.getDate()}
        </div>
        <div className="tDayTip">
          {dayType && t.dayTipMap[dayType] ? t.dayTipMap[dayType] : today == day ? '今天' : ''}
        </div>
      </div>
      week.push(dateContent);
      date.setDate(date.getDate() + 1); //逐天递增
    }

    var flexBoxKey = 0;
    //计算当前月天数
    while (date.getMonth() == month) {
      flexBoxKey++;
      //判断上个月是否剩余满7天
      if (week.length == 7) {
        ret.push(<div key={month + flexBoxKey} className="tFBH">{week}</div>);
        week = [];
      }
      cls = 'tFB1 ';
      day = format(date, '-');
      cls += (prop.minDate && day < prop.minDate) || (prop.maxDate && day > prop.maxDate) ? ' tInvalid ' : '';
      cls = cls + (today == day ? ' tNow ' : '');

      //获取日期特殊标识符
      if (code) {
        var arr = day.split('-'),
          tYear = arr[0],
          tMonth = (arr[1] * 1).toString(),
          tDay = (arr[2] * 1).toString();
        if (code[tYear] && code[tYear][tMonth] && code[tYear][tMonth][tDay]) {
          var tStatus = code[tYear][tMonth][tDay][1];//1假2休3班
          if (tStatus == 1 || tStatus == 2) {
            cls = cls + ' tGray ';
          } else if (tStatus == 3) {
            cls = cls + ' tBlue ';
          }
        }
      }
      ;

      //查询请假情况
      if (existsLeave.leavingCalendar) {
        var items = existsLeave.leavingCalendar,
          flag = false;

        if (items.length) {
          for (var i = 0; i < items.length; i++) {
            if (items[i]['dateStr'] == day) {
              flag = true;
            }
          }
          ;
        }
        ;
      }
      ;

      dayType = this.isInRange(day);
      if (dayType) {
        cls = cls + ' tSelected';
        cls = cls + (dayType == 'AM' ? ' tAM' : dayType == 'PM' ? ' tPM' : '');
      }

      dateContent = <div key={day} className={cls + ' tTap tOp'} data-date={day} onClick={this.handleClick}>
        <div className="tDatePoint">
          {date.getDate()}
        </div>
        <div className="tDayTip">
          {
            (t.props.singleMode && t.props.autoFinish) ?
              flag ? <s className="special-tag"></s> : ''
              :
              dayType && t.dayTipMap[dayType] ? t.dayTipMap[dayType] : today == day ? '今天' : ''
          }
        </div>
      </div>
      week.push(dateContent);
      date.setDate(date.getDate() + 1);
    }

    //计算下个月剩余补充天数
    align = 7 - date.getDay();
    if (align < 7) {
      for (i = 0; i < align; i++) {
        cls = 'tFB1 tOth ';
        day = format(date, '-');
        cls += (prop.minDate && day < prop.minDate) || (prop.maxDate && day > prop.maxDate) ? ' tInvalid ' : '';
        cls = cls + (today == day ? ' tNow ' : '');

        //获取日期特殊标识符
        if (code) {
          var arr = day.split('-'),
            tYear = arr[0],
            tMonth = (arr[1] * 1).toString(),
            tDay = (arr[2] * 1).toString();
          if (code[tYear] && code[tYear][tMonth] && code[tYear][tMonth][tDay]) {
            var tStatus = code[tYear][tMonth][tDay][1];//1假2休3班
            if (tStatus == 1 || tStatus == 2) {
              cls = cls + ' tGray ';
            } else if (tStatus == 3) {
              cls = cls + ' tBlue ';
            }
          }
        }
        ;

        dayType = this.isInRange(day);
        if (dayType) {
          cls = cls + ' tSelected';
          cls = cls + (dayType == 'AM' ? ' tAM' : dayType == 'PM' ? ' tPM' : '');
        }

        //管理日历时前后月不可点
        if (t.props.singleMode && t.props.autoFinish) {
          cls = cls + ' tInvalid ';
        }
        ;

        dateContent = <div key={day} className={cls + ' tTap tOp'} data-date={day} onClick={this.handleClick}>
          <div className="tDatePoint">
            {date.getDate()}
          </div>
          <div className="tDayTip">
            {dayType && t.dayTipMap[dayType] ? t.dayTipMap[dayType] : today == day ? '今天' : ''}
          </div>
        </div>
        week.push(dateContent);
        date.setDate(date.getDate() + 1);
      }
      ret.push(<div key="alignlt7" className="tFBH">{week}</div>);
    } else {
      ret.push(<div key="aligngt7" className="tFBH">{week}</div>);
    }
    ;
    return ret;
  },

  selectDay: function (e) {
    var state = this.state,
      cur = state.cur,
      target = e.target,
      day = target.getAttribute('data-day') || target.parentNode.getAttribute('data-day'),
      state = this.state,
      range = state.range;

    if (range.length == 1) {
      range[0].day = day;
    } else if (range.length == 2) {
      if (range[cur].date == range[1 - cur].date) {
        range[cur].day = day;
        range[1 - cur].day = day;
      } else {
        range[cur].day = day;
      }
    }

    this.setState(state);
  },

  //cur(1代表正序,0代表反序)
  getLeft: function (range, index) {
    var t = this;
    var am = <div key="tMorning" className={"tDay tMorning tTap tOp " + (range[index].day == 'AM' ? 'now' : '' )}
                  onClick={this.selectDay} data-day="AM"><span>{t.dayTipMap['AM']}</span></div>,
      pm = <div key="tAfternoon" className={"tDay tAfternoon tTap tOp " + (range[index].day == 'PM' ? 'now' : '' )}
                onClick={this.selectDay} data-day="PM"><span>{t.dayTipMap['PM']}</span></div>;

    if (range.length == 2 && range[0].date != range[1].date) {
      if (this.state.cur == 1) {
        pm = '';
      } else if (this.state.cur == 0) {
        am = '';
      }
      if (range[0].day == 'AM') {
        range[0].day = 'FULL';
      }
      if (range[1].day == 'PM') {
        range[1].day = 'FULL';
      }
    }
    //是否显示上午、下午
    if (t.props.showHalfDay) {
      return [<div key="tFullDay" className={"tDay tFullDay tTap tOp " + (range[index].day == 'FULL' ? 'now' : '' )}
                   onClick={this.selectDay} data-day="FULL"><span>{t.dayTipMap['FULL']}</span></div>,
        {am},
        {pm}];
    } else {
      return [<div key="tFullDay" className={"tDay tFullDay tTap tOp " + (range[index].day == 'FULL' ? 'now' : '' )}
                   onClick={this.selectDay} data-day="FULL"><span>{t.dayTipMap['FULL']}</span></div>];
    }

  },

  getText: function () {
    var t = this;
    var lang = t.props.lang;
    var str = '';
    switch (lang) {
      case 'zh-cn':
        str = t.state.date.getFullYear() + '年' + (t.state.date.getMonth() + 1) + '月';
        break;
      case 'en':
        str = t.monthTitle[t.state.date.getMonth()] + ' ' + t.state.date.getFullYear();
        break;
    }
    return str;
  },

  render: function () {
    var left = '',
      right = '',
      ret = '',
      selected = '',
      state = this.getState(),
      range = state.range,
      cur = state.cur,
      len = range.length,
      showDefault = state.showDefault,
      {show, left, width, top, autoFinish, singleMode, ...other} = this.props,
      t = this;

    if (showDefault && !singleMode) {
      if (len) {
        left = this.getLeft(range, cur, true);
        selected = range[cur].date.substring(8).replace(/^0/, '');
      }

    } else {
      if (len == 2) {
        left = this.getLeft(range, cur);
        selected = range[cur].date.substring(8).replace(/^0/, '');
      } else if (len == 1) {
        left = this.getLeft(range, 0);
        selected = range[0].date.substring(8).replace(/^0/, '');
      } else if (len == 0) {
      }
    }
    if (!singleMode) {
      right = <div className={"tReset" + (len == 0 ? " tGray" : "")} onClick={this.clear}>{t.button['clear']}</div>
    }

    if (show) {
      ret = this.handleDate();
    }

    return (
      <div className={"tCalendar " + (showDefault ? "tDefault " : "") + t.props.className}
           style={{'display': show ? 'block' : 'none' }}>
        <div className="tTool tFBH tFBAC">
          <div className="tFB1"></div>
          <div className="tBtn tPrevMonth tTap tOp" onClick={t.handlePrev}>&lt;</div>
          <span className="tText">{this.getText()}</span>
          <div className="tBtn tNextMonth tTap tOp" onClick={t.handleNext}>&gt;</div>
          <div className="tFB1"></div>
        </div>
        <div className="tWeek tFBH">
          {
            t.weekTitle.map(function (item, index) {
              return <div className="tFB1 tFBAC" key={index}>{item}</div>
            })
          }
        </div>
        <div className="tMonth">
          {ret}
        </div>
        <div className={classnames({
                    "tHalfWrap tFBH tFBAC": true,
                    tDN: singleMode
                })}>
          <div className="selectedDay">{selected}</div>
          {left}
          <div className="tFB1"></div>
          {right}
        </div>
        <div className={classnames({
                    tOperate: true,
                    tDN: singleMode && autoFinish
                })}>
          <span className={"tCancel tTap tOp"  + (len == 0 ? " tGray" : "")}
                onClick={this.onCancel}>{t.button['cancel']}</span>
          <span className={"tConfirm tTap tOp" + (len == 0 ? " tGray" : "")}
                onClick={this.onConfirm}>{t.button['confirm']}</span>
        </div>
      </div>
    );
  }
});

Calendar.defaultProps = {
  className: '',
  show: false,
  calendarCode: {},
  existsLeave: {},
  defaultValue: "",
  lang: "zh-cn",
  autoFinish: false,
  singleMode: false,
  onCancel() {
  },
  getValue() {
  },
  handleSwitch() {
  }
}

Calendar.propTypes = {
  className: React.PropTypes.string,
  show: React.PropTypes.bool, // 是否显示
  calendarCode: React.PropTypes.object, // 后端传来的 code
  existsLeave: React.PropTypes.object, // 查询当前月份的请假数据
  defaultValue: React.PropTypes.string, // 默认值
  lang: React.PropTypes.string, // 国际化语言
  autoFinish: React.PropTypes.bool, // 是否不需要点击确定，直接返回值，必须在 singleMode 开启的情况下才有效
  singleMode: React.PropTypes.bool, // 是否是单选模式
  onCancel: React.PropTypes.func, // 取消选择时触发的回调
  getValue: React.PropTypes.func, // 返回值时触发的回调
  handleSwitch: React.PropTypes.func // 切换日期进行数据查询
}

function zero(n) {
  return n > 9 ? n : '0' + n;
}
function format(date, sep) {
  sep = sep || '';
  return '' + date.getFullYear() + sep + zero(date.getMonth() + 1) + sep + zero(date.getDate());
}

module.exports = Calendar;
