var Slide = Tingle.Slide;
let classnames = require('classnames');
/**
 * Lwslide Component for tinglejs
 */

class Lwslide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      showDialog: 0,
      showSecret: false,
      showLast: 0,
      countDown: 3,
      slideList: [{
        img: './tingle/tingle-slide/demo/img/0.jpg'
      }, {
        img: './tingle/tingle-slide/demo/img/1.jpg'
      }, {
        img: './tingle/tingle-slide/demo/img/2.jpg'
      }]
    }
  }

  componentDidMount() {
    var t = this;
    t.autoSlide = setTimeout(function () {
      t.refs.slide.goNext();
    }, 3000);
  }

  handleSlideEnd(info) {
    var t = this;

    this.setState({
      active: info.index
    });

    if (info.index !== t.cache) {
      clearTimeout(t.autoSlide);
      clearInterval(t.timer);
      clearInterval(t.countDown);
      clearInterval(t.showLast);
      t.setState({
        showDialog: 0,
        countDown: 3,
        showSecret: false,
        showLast: 0
      });
      if (info.index === 1) {
        t.setState({
          showLast: 0
        });
        t.timer = setInterval(function () {
          t.setState({
            showDialog: t.state.showDialog + 1
          });
          if (t.state.showDialog == 8) {
            t.handleClick();
          }
        }, 500);
      }
      else if (info.index === 2) {
        t.showLast = setInterval(function () {
          t.setState({
            showLast: t.state.showLast + 1
          });
          if (t.state.showLast === 3) {
            clearInterval(t.showLast);
          }
        }, 500);
      }
    }
    t.cache = info.index;
  }

  handleClick() {
    var t = this;
    clearInterval(t.countDown);
    clearInterval(t.timer);
    t.setState({
      showSecret: true
    })
    t.countDown = setInterval(function () {
      t.setState({
        countDown: t.state.countDown - 1
      })
      if (t.state.countDown == 0) {
        clearInterval(t.countDown);
        t.autoSlide = setTimeout(function () {
          t.refs.slide.goNext();
        }, 500);
      }
    }, 1000);

  }

  handleTS() {
    var t = this;
    clearTimeout(t.autoSlide);
  }

  render() {
    var t = this;
    var pageHeight = document.documentElement.clientHeight || window.innerHeight;
    return (
      <div className="lwSlide" onTouchStart={t.handleTS.bind(t)}>
        <Slide ref="slide" height={pageHeight} onSlideEnd={t.handleSlideEnd.bind(t)} loop={false}>
          <div className="tFBV" id="homepage" style={{backgroundColor:"white"}}>
            <div className="figure"></div>
            <div className="msgBox">
              <div className="hometalk"></div>
            </div>
            <div id="canvas1"></div>
          </div>
          <div className="tFBV" id="dialogBox" style={{backgroundColor:"#f2f2f2"}}>
            <div className={classnames({
                            dialog: true,
                            tDN: t.state.showDialog < 0,
                            fadeIn: t.state.showDialog >= 0
                        })}>
              <div className="avatar tDIB"></div>

              <div className="message tF16 tDIB talk1"></div>
            </div>
            <div className={classnames({
                            dialog: true,
                            tDN: t.state.showDialog < 2,
                            fadeIn: t.state.showDialog >= 2
                        })}>
              <div className="avatar tDIB"></div>
              <div className="message tF16 tDIB talk2"></div>
            </div>
            <div className={classnames({
                            dialog: true,
                            tDN: t.state.showDialog < 4,
                            tHide: t.state.showSecret,
                            fadeIn: t.state.showDialog >= 4
                        })}>
              <div className="avatar tDIB"></div>
              <div className="message tF16 tDIB talk3" id="click" onClick={t.handleClick.bind(t)}></div>
              <div className="hand tDIB"></div>
              <div className="clock tDIB"></div>
            </div>
            <div className={classnames({
                            dialog: true,
                            tHide: !t.state.showSecret,
                            fadeout: t.state.countDown == 0
                        })}>
              <div className="avatar tDIB"></div>
              <div className="message tF16 tDIB talk4"></div>
              <div className="countDown tDIB">{t.state.countDown}</div>
            </div>
            <div id="canvas2"></div>
          </div>
          <div className="tFBV tFBAC" id="lastPage" style={{backgroundColor:"white"}}>
            <div className={classnames({
                            figure: true,
                            tDN: t.state.showLast >= 3
                        })}></div>
            <div className={classnames({
                            figBrokenBox: true,
                            down: t.state.showLast >= 3 && pageHeight > 490,
                            down2: t.state.showLast >= 3 && pageHeight <= 490,
                            tDN: t.state.showLast < 3
                        })}>
              <div className={classnames({
                                figBroken: t.state.active == 2
                            })}></div>
            </div>
            <div className={classnames({
                            msgBox: true,
                            fadeIn: t.state.showLast >= 3
                        })}>
              <div className="lasttalk"></div>
            </div>
            <div id="canvas3" className={classnames({
                            tDN: t.state.showLast >= 3
                        })}></div>

          </div>
        </Slide>
        <div className="tFBH dotBox">
          {this.state.slideList.map(function (item, index) {
            return <div className={classnames({
                            dot: true,
                            active: t.state.active === index
                        })}></div>
          })}
        </div>

      </div>
    );
  }
}


Lwslide.defaultProps = {}

// http://facebook.github.io/react/docs/reusable-components.html
Lwslide.propTypes = {}

module.exports = Lwslide;
