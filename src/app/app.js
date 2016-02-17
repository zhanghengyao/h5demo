window.FastClick && FastClick.attach(document.body);


var Router = ReactRouter;

// 避免内外webview报错
window.AliworkWebView_WillGoBack = function () {
};

let {NotFoundRoute,DefaultRoute,Route,RouteHandler} = Router;

let PageHome = require('../pages/home');
let PageForm = require('../pages/form');
let PageResult = require('../pages/result');
let PageList = require('../pages/list');
let PageAbout = require('../pages/about');
//let PageMotorCycle = require('../pages/motorcycle');
let PageNative = require('../pages/native');
let PageOther = require('../pages/other');
let PageOtherComponents = require('../pages/other-components');
let PageBlackboard = require('../pages/blackboard');


let PageCalendar = require('../pages/calendar');
let PageIcon = require('../pages/icon');
let PageLayout = require('../pages/layout');
let PageButton = require('../pages/button');
let PageDialog = require('../pages/dialog');
let PageTip = require('../pages/tip');
let PageSlide = require('../pages/slide');
let PageProject = require('../pages/project');

class App extends React.Component {
  render() {
    return (<div>
      <RouteHandler/>
    </div>)
  }
}


var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={PageHome}/>
    // <NotFoundRoute handler={PageHome}/>
    // <Route name="form" handler={PageForm}/>
    // <Route name="result" handler={PageResult}/>
    // <Route name="list" handler={PageAbout}/>
    // <Route name="about" handler={PageAbout}/>
    // <Route name="native" handler={PageNative}/>
    // <Route name="calendar" handler={PageCalendar}/>
    // <Route name="icon" handler={PageIcon}/>
    // <Route name="layout" handler={PageLayout}/>
    // <Route name="project" handler={PageProject}/>
    // <Route name="blackboard" handler={PageBlackboard}/>
    // <Route name="other-components" handler={PageOtherComponents}/>


    // <Route name="button" handler={PageButton}/>
    // <Route name="dialog" handler={PageDialog}/>
    // <Route name="tip" handler={PageTip}/>
    // <Route name="slide" handler={PageSlide}/>


  </Route>
);

Router.run(routes, function (Handler, state) {
  React.render(<Handler/>, document.getElementById('App'));
});
