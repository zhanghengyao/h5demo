var reactMixin = require('react-mixin');
var {Slide} = Tingle;
let isSupportWebp = require('../../components/webpSupport').isSupportWebp();

var lastTime = 0;
var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀

var requestAnimationFrame = window.requestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame;

var prefix;
//通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
for (var i = 0; i < prefixes.length; i++) {
  if (requestAnimationFrame && cancelAnimationFrame) {
    break;
  }
  prefix = prefixes[i];
  requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
  cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
}

//如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
if (!requestAnimationFrame || !cancelAnimationFrame) {
  requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    //为了使setTimteout的尽可能的接近每秒60帧的效果
    var timeToCall = Math.max(0, 16 - ( currTime - lastTime ));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  cancelAnimationFrame = function (id) {
    window.clearTimeout(id);
  };
}

//得到兼容各浏览器的API
window.requestAnimationFrame = requestAnimationFrame;
window.cancelAnimationFrame = cancelAnimationFrame;


window.SiriWave = function (opt) {
  this.opt = opt || {};

  this.K = 2;
  this.F = 6;
  this.speed = this.opt.speed || 0.1;
  this.noise = this.opt.noise || 0;
  this.phase = this.opt.phase || 0;

  if (!devicePixelRatio) devicePixelRatio = 1;
  this.width = devicePixelRatio * (this.opt.width || 320);
  this.height = devicePixelRatio * (this.opt.height || 100);
  this.MAX = (this.height / 2) - 4;

  this.canvas = document.createElement('canvas');
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.canvas.style.width = (this.width / devicePixelRatio) + 'px';
  this.canvas.style.height = (this.height / devicePixelRatio) + 'px';
  (this.opt.container || document.body).appendChild(this.canvas);
  this.ctx = this.canvas.getContext('2d');

  this.run = false;
}

SiriWave.prototype = {

  _globalAttenuationFn: function (x) {
    return Math.pow(this.K * 4 / (this.K * 4 + Math.pow(x, 4)), this.K * 2);
  },

  _drawLine: function (attenuation, color, width) {
    this._clear();
    this.ctx.moveTo(0, 0);
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width || 1;
    var x, y;
    for (var i = -this.K; i <= this.K; i += 0.01) {
      x = this.width * ((i + this.K) / (this.K * 2));
      y = this.height / 2 + this.noise * this._globalAttenuationFn(i) * (1 / attenuation) * Math.sin(this.F * i - this.phase);
      this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();
  },

  _clear: function () {
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = 'source-over';
  },

  _draw: function () {
    if (!this.run) return;

    this.phase = (this.phase + this.speed) % (Math.PI * 64);
    this._clear();
    this._drawLine(1, 'rgba(0,0,0,0.2)', 1.5);

    requestAnimationFrame(this._draw.bind(this), 2000);
    // setInterval(this._draw.bind(this), 1000);
  },

  start: function () {
    this.phase = 0;
    this.run = true;
    this._draw();
  },

  stop: function () {
    this.run = false;
    this._clear();
  },

  setNoise: function (v) {
    this.noise = Math.min(v, 1) * this.MAX;
  },

  setSpeed: function (v) {
    this.speed = v;
  },

  setWidth: function (v) {
    this.width = v;
  },

  setHeight: function (v) {
    this.height = v;
  },

  set: function (obj) {
    obj.noise && this.setNoise(obj.noise);
    obj.speed && this.setSpeed(speed);
    obj.width && this.setWidth(width);
    obj.height && this.setHeight(height);
  }

};

var Lwslide = require('./lwslide');

class Page extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var SW1 = new SiriWave({
      width: window.innerWidth * 0.5,
      height: 30,
      container: document.getElementById("canvas1")
    });

    SW1.setSpeed(0.3);
    SW1.setNoise(0.1);
    SW1.start();


    var SW2 = new SiriWave({
      width: window.innerWidth,
      height: 30,
      container: document.getElementById("canvas2")
    });

    SW2.setSpeed(0.3);
    SW2.setNoise(0.1);
    SW2.start();

    var SW3 = new SiriWave({
      width: window.innerWidth * 0.5,
      height: 30,
      container: document.getElementById("canvas3")
    });

    SW3.setSpeed(0.3);
    SW3.setNoise(0.1);
    SW3.start();

  }

  render() {
    return (
      <div>
        <Lwslide/>
      </div>
    );
  }
}

reactMixin.onClass(Page, ReactRouter.Navigation);

module.exports = Page;
