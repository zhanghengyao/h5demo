let reactMixin = require('react-mixin');

let AboutItem = require('./item');
let {Tab,Group} = Tingle;

import contributor from './contributor';
import projects from './projects';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: contributor,
      projects: projects
    }
  }

  render() {
    let t = this;
    return (
      <div className="page-about">

        <Tab className="tPageList">
          <Tab.item title="贡献者">
            <Group.List lineIndent={14} itemIndent={[14,14]}>
              {this.state.item.map(function (item) {
                return (<AboutItem itemData={item}/>);
              })}
            </Group.List>
          </Tab.item>
          <Tab.item title="服务于项目">

            {this.state.projects.map(function (item) {
              return (
                <Group className="project-tingle">
                  <Group.Head>
                    {item.line}
                  </Group.Head>
                  <Group.List lineIndent={14} itemIndent={[14,14]}>
                    {
                      item.projects.map(function (project) {
                        return (<span>{project.name}</span>)
                      })
                    }
                  </Group.List>
                </Group>
              );
            })}

          </Tab.item>
        </Tab>
      </div>
    )
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
