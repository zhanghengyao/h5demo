let isSupportWebp = window.localStorage.getItem('webp');
const WEBPTESTURL = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

if (!isIOS && isSupportWebp === null) {
  var img = new Image();

  img.onload = function () {
    if (img.height === 2) {
      window.localStorage.setItem('webp', 'true');
    } else {
      window.localStorage.setItem('webp', 'false');
    }
    img = img.onload = img.onerror = null;
  };

  img.onerror = function () {
    window.localStorage.setItem('webp', 'false');
    img = img.onload = img.onerror = null;
  };

  img.src = WEBPTESTURL;
}


// iOS 需要插件支持
module.exports = {
  isSupportWebp: ()=> isIOS ? false : window.localStorage.getItem('webp') === 'true'
};
