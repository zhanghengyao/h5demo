var reactMixin = require('react-mixin');
var {Group,Rate} = Tingle;

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 3
    }
  }

  handleChange(currentScore) {
    this.setState({
      score: currentScore
    })
  }


  render() {
    let t = this;
    return (
      <div>
        <Group>
          <Group.Head>
            Tingle.Rate
          </Group.Head>
          <Group.List itemIndent={[14,14]} lineIndent={14}>
            <div className="tFBH tFBAC tH44">
              <div className="tFB1">请给五星：</div>
              <Rate totalScore={5} height={20} gap={15} score={t.state.score} onChange={t.handleChange.bind(t)}/>
            </div>
          </Group.List>
        </Group>

      </div>
    );
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
