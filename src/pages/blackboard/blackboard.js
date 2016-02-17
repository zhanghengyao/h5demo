import BlackBoardOrganization from "./blackboardOrganization";
import BlackboardTable from "./blackboardTable";
let {Group} = Tingle;
Chart.defaults.global.responsive = true;

class Page extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      personCount: 628,
      organizationCount: 489,
      trendData: {
        labels: ["2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "当前"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(70, 180, 241,0.2)",
            strokeColor: "rgba(70, 180, 241,1)",
            pointColor: "rgba(70, 180, 241,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [565, 559, 580, 581, 606, 612, 628]
          }
        ]
      },
      inOutData: [
        [{title: "最近7天"}, {title: 8, strong: true}, {title: 0, highlight: true}],
        [{title: "本月"}, {title: 27, strong: true}, {title: 2, highlight: true}],
        [{title: "本年"}, {title: 106, strong: true}, {title: 11, highlight: true}]
      ],
      hrData: [
        [{title: "今日员工生日提示"}, {title: 2, highlight: true}],
        [{title: "未来7天员工生日提示"}, {title: 9, strong: true}],
        [{title: "已过期员工转正提醒"}, {title: 41, highlight: true}],
        [{title: "未来7天待转正员工提示"}, {title: 0, strong: true}],
      ]
    }
  }

  componentDidMount() {
    this.lineChart = this._renderLineChart();
  }

  _renderLineChart() {
    var ctx = React.findDOMNode(this.refs.lineChartsContainer).getContext("2d");
    return new Chart(ctx).Line(this.state.trendData, {});
  }

  render() {
    let t = this;
    return (
      <div>
        <Group>
          <Group.Head>
            当前人数与编制
          </Group.Head>
          <Group.List lineIndent={14} itemIndent={[14,14]}>
            <BlackBoardOrganization count={t.state.personCount} oCount={t.state.organizationCount}/>
          </Group.List>
        </Group>
        <Group>
          <Group.Head>
            6个月人员趋势
          </Group.Head>
          <Group.List lineIndent={14} itemIndent={[14,14]}>
            <canvas className="line-charts-container" ref="lineChartsContainer"></canvas>
          </Group.List>
        </Group>
        <Group>
          <Group.Head>
            入职/离职人数统计
          </Group.Head>
          <Group.List lineIndent={14} itemIndent={[14,14]}>
            <BlackboardTable data={t.state.inOutData}/>
          </Group.List>
        </Group>
        <Group>
          <Group.Head>
            HR事务预警
          </Group.Head>
          <Group.List lineIndent={14} itemIndent={[14,14]}>
            <BlackboardTable data={t.state.hrData}/>
          </Group.List>
        </Group>
      </div>
    )
  }
}

module.exports = Page;
