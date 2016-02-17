/*
 * @Author: caoke
 * @Date:   2015-08-28 13:24:25
 * @Last Modified by:   caoke
 * @Last Modified time: 2015-09-14 13:18:47
 */

let {Group,Button,Tip,SelectField,NumberField} = Tingle;

class Module extends React.Component {
  constructor(props) {
    super(props);
    var formatDataValue = SelectField.formatDataValue([
      'HH:mm',
      'yyyy-MM-dd',
      'yyyy-MM-dd HH:mm:ss'
    ]);
    var pickTypeDataValue = SelectField.formatDataValue([
      {
        text: '时分选择',
        value: 'time'
      },
      {
        text: '年月日选择',
        value: 'date'
      },
      {
        text: '年月日+时分选择',
        value: 'dateTime'
      }
    ]);
    var singleDataValue = SelectField.formatDataValue([
      {
        text: '多人模式',
        value: 'false'
      },
      {
        text: '单人模式',
        value: 'true'
      }
    ]);
    this.state = {
      formatOptions: formatDataValue.data,
      format: formatDataValue.value,
      pickTypeOptions: pickTypeDataValue.data,
      pickType: pickTypeDataValue.value,
      singleOptions: singleDataValue.data,
      single: singleDataValue.value,
      picWidth: 20,
      picHeight: 20,
      profileId: '67732'
    }
  }

  componentDidMount() {
    let t = this;
    if (!window.WindVane) {
      Tip.show({
        icon: 'error',
        text: 'Please open this site in alinw webview.',
        duration: 20000
      });
    }
  }

  handlerTimePickerClick() {
    let t = this;
    WindVane.call('WVNative', 'timePicker', {
      format: t.state.format[0].value, //yyyy-MM-dd 或 HH:mm 或yyyy-MM-dd HH:mm:ss
      pickType: t.state.pickType[0].value //date(年月日选择) 或time（时分选择） 或dateTime(年月日+时分选择)
    }, function (e) {
      let timeMsg = React.findDOMNode(t.refs.timeMsg);
      timeMsg.innerHTML = JSON.stringify(e);
    });
  }

  handlerPersonPickerClick() {
    let t = this;
    WindVane.call('WVNative', 'peoplePicker', {
      'single': t.state.single[0].value,//是否支持多选
      'picWidth': t.state.picWidth,//人员头像的图片宽度，如果为0就返回原图
      'picHeight': t.state.picHeight//人员头像的图片高度，如果为0就返回原图
    }, function (e) {
      let personMsg = React.findDOMNode(t.refs.personMsg);
      personMsg.innerHTML = JSON.stringify(e)
    })

  }

  handlerNetworkClick() {
    let t = this;
    WindVane.call('WVNative', 'getCurrentNetStatus', {}, function (e) {
      let netMsg = React.findDOMNode(t.refs.netMsg);
      netMsg.innerHTML = JSON.stringify(e);
    })
  }

  handleBackClick() {
    WindVane.call('WVNative', 'nativeBack', {}, function () {

    });
  }

  handlerProfileClick() {
    let t = this;
    WindVane.call('WVNative', 'showPersonProfile', {
      'userId': t.state.profileId
    }, function () {
    })
  }

  handlerSendMsgClick() {
    WindVane.call('WVNative', 'sendPost', {
      'bizType': 'Create', // 业务类型(Create, Forward, Comment)
      'title': '发送内外新分享', // 大标题
      'postScope': 'public', // public, private
      'content': '', // 默认内容
      'placeholderText': '九神测试' // placeholder
    }, function () {
    })
  }

  handlerCommentClick() {
    WindVane.call('WVNative', 'sendPost', {
      'bizType': 'Comment', //业务类型(Create, Forward, Comment)
      'postId': '4998623', //帖子id
      'srcCommentId': '2595',
      'content': 'xia dan', //帖子内容
      'placeholderText': 'comment' //placeholder
    }, function () {
    });

  }

  handlerForwardsClick() {
    WindVane.call('WVNative', 'sendPost', {
      'bizType': 'Forward', //业务类型(Create, Forward, Comment)
      'groupId': '', //群id
      'extraContent': {"postId": "4998627", "publisherId": "43957"}, // 转发的分享 id 和人的 id
      'content': 'Dodd', //帖子内容
      'placeholderText': 'forward' //placeholder
    }, function () {
    });
  }

  handlerGetLocationClick() {
    var t = this;
    WindVane.call('WVNative', 'getLocation', {
      'enableHighAccuracy': false, // 是否开启高精确模式，然而好像没什么用
      'address': false // 返回的 data 中是否包含 address 字段
    }, function (e) {
      let getLocationDone = React.findDOMNode(t.refs.getLocationDone);
      getLocationDone.innerHTML = JSON.stringify(e);
    }, function (e) {
      let getLocationFail = React.findDOMNode(t.refs.getLocationFail);
      getLocationFail.innerHTML = JSON.stringify(e);
    })
  }

  handlerNativeCallClick() {
    WindVane.call('WVNative', 'nativeCall', {
      'ios': {
        'scheme': 'taobao://',  // 唤醒的其他 app 的接口，如果没有相应的 app，则跳转至相应的 download Url
        'downloadURL': '//m.taobao.com/channel/act/sale/tbdl1.html'
      },
      'android': {
        'scheme': 'taobao://',
        'downloadURL': '//m.taobao.com/channel/act/sale/tbdl1.html',
        'pkg': 'com.taobao.taobao'
      }
    }, function (e) {
    })
  }

  handlerAttachmentClick() {
    WindVane.call('WVNative', 'openAttachment', {
      'downloadUrl': 'https://a-work.alibaba-inc.com/asset/workflow/common/downloadAttachment.do?attachId=4612640877944832', // 必填，附件的链接
      'fileName': 'test.msg', // 必填，文件的名字
      'fileSize': 0, // 可选
      'fileType': '' // 可选
    }, function () {
    });

  }

  handlerVersionClick() {
    var t = this;
    WindVane.call('WVNative', 'getVersion', {}, function (e) {
      let msg = React.findDOMNode(t.refs.versionMsg);
      msg.innerHTML = JSON.stringify(e);
    }, function (e) {
      let msg = React.findDOMNode(t.refs.versionMsg);
      msg.innerHTML = JSON.stringify(e);
    });
  }

  handlerGetLocationInParkClick() {
    var t = this;
    WindVane.call('WVNative', 'getLocationInPark', {}, function (e) {
      let msg = React.findDOMNode(t.refs.getLocationInParkMsg);
      msg.innerHTML = JSON.stringify(e);
    }, function (e) {
      let msg = React.findDOMNode(t.refs.getLocationInParkMsg);
      msg.innerHTML = JSON.stringify(e);
    });
  }

  handlerNavigateToClick() {
    var t = this;
    WindVane.call('WVNative', 'navigateTo', {
      'xCoord': 120.02357733161482,//double
      'yCoord': 30.27921178524374,//double
      'floor': 5,//int
      'name': "jiushen\'s location"
    }, function (e) {
      let msg = React.findDOMNode(t.refs.navigateToMsg);
      msg.innerHTML = JSON.stringify(e);
    }, function (e) {
      let msg = React.findDOMNode(t.refs.navigateToMsg);
      msg.innerHTML = JSON.stringify(e);
    });
  }

  handlerSelectChange(k, v) {
    this.setState({
      [k]: v
    })
  }

  handlerAlertClick() {
    WindVane.call('WVUIDialog', 'alert', {"message": "我是内外弹窗", "okbutton": "确定"}, function (e) {
      //nop callback
    });
  }

  render() {
    let t = this;
    return (
      <div className="tPageNative">
        <div className="feature-block">
          <Group>
            <Group.Head>
              选时间
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              <SelectField label="日期格式" data={t.state.formatOptions} value={t.state.format}
                           onChange={t.handlerSelectChange.bind(t, 'format')}/>
              <SelectField label="选择类型" data={t.state.pickTypeOptions} value={t.state.pickType}
                           onChange={t.handlerSelectChange.bind(t, 'pickType')}/>
              <div ref="timeMsg" className="tLH44 tFC6">显示返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="timePicker" onClick={t.handlerTimePickerClick.bind(t)}>选择时间</Button>
          </div>
        </div>

        <div className="feature-block">
          <Group>
            <Group.Head>
              选人
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}><SelectField label="选人模式" data={t.state.singleOptions}
                                                                          value={t.state.single}
                                                                          onChange={t.handlerSelectChange.bind(t, 'single')}/>
              <NumberField label="图片宽度" value={t.state.picWidth} onChange={t.handlerSelectChange.bind(t, 'picWidth')}/>
              <NumberField label="图片高度" value={t.state.picHeight}
                           onChange={t.handlerSelectChange.bind(t, 'picHeight')}/>
              <div ref="personMsg" className="tLH44 tFC6">显示返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="personPicker" onClick={t.handlerPersonPickerClick.bind(t)}>选人</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">弹出消息</div>
            <Button ref="alert" onClick={t.handlerAlertClick.bind(t)}>调用 Alert</Button>
          </div>
        </div>

        <div className="feature-block">
          <Group>
            <Group.Head>查看网络状态
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              <div ref="netMsg" className="tLH44 tFC6">显示返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="network" onClick={t.handlerNetworkClick.bind(t)}>查看网络状态</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">回退</div>
            <Button ref="back" onClick={t.handleBackClick.bind(t)}>WebView 回退</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">显示个人信息</div>
            <Button ref="profile" onClick={t.handlerProfileClick.bind(t)}>显示个人信息</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">发消息</div>
            <Button ref="sendMsg" onClick={t.handlerSendMsgClick.bind(t)}>发消息</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">发评论</div>
            <Button ref="comment" onClick={t.handlerCommentClick.bind(t)}>发评论</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">内外转发</div>
            <Button ref="forwards" onClick={t.handlerForwardsClick.bind(t)}>内外转发</Button>
          </div>
        </div>

        <div className="feature-block">
          <Group>
            <Group.Head>获取位置
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              <div ref="getLocationDone" className="tLH44 tFC6">显示成功返回的值</div>
              <div ref="getLocationFail" className="tLH44 tFC6">显示失败返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="getLocation" onClick={t.handlerGetLocationClick.bind(t)}>获取位置</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">唤醒其他app的接口</div>
            <Button ref="nativeCall" onClick={t.handlerNativeCallClick.bind(t)}>唤醒淘宝 APP</Button>
          </div>
        </div>

        <div className="feature-block">
          <div className="button-wrapper">
            <div className="tLH44">打开附件</div>
            <Button ref="attachment" onClick={t.handlerAttachmentClick.bind(t)}>打开附件</Button>
          </div>
        </div>

        <div className="feature-block">
          <Group>
            <Group.Head>获取版本号
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              <div ref="versionMsg" className="tLH44 tFC6">显示返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="version" onClick={t.handlerVersionClick.bind(t)}>获取版本号</Button>
          </div>
        </div>

        <div className="feature-block">
          <Group>
            <Group.Head>显示在园区中的位置
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              <div ref="getLocationInParkMsg" className="tLH44 tFC6">显示返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="getLocationInPark" onClick={t.handlerGetLocationInParkClick.bind(t)}>显示在园区中的位置</Button>
          </div>
        </div>

        <div className="feature-block">
          <Group>
            <Group.Head>打开地图，并定位到指定位置
            </Group.Head>
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              <div ref="navigateToMsg" className="tLH44 tFC6">显示返回的值</div>
            </Group.List>
          </Group>
          <div className="button-wrapper">
            <Button ref="navigateTo" onClick={t.handlerNavigateToClick.bind(t)}>打开地图，并定位到指定位置</Button>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Module;
