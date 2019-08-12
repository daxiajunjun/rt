(function (window, document) {
  var docEle = document.documentElement;
  var dpr = window.devicePixelRatio || 1;
  var scale = 1 / dpr;

  var fontSizeRadio = 1;
  var isLandScape = false;

  document
    .getElementsByName('viewport')[0]
    .setAttribute('content', `width=device-width,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}, user-scale=no`)

  if (window.orientation === 90 || window.orientation === -90) {
    isLandScape = true;
  }

  var setFz = '100px';

  var headEle = document.getElementsByTagName('head')[0];
  var spanEle = document.createElement('span');
  spanEle.style.fontSize = setFz;
  spanEle.style.display = 'none';
  headEle.appendChild(spanEle);

  var realFz = getComputedStyle(spanEle).getPropertyValue('font-size');

  if (setFz !== realFz) {
    setFz = parseFloat(setFz);
    realFz = parseFloat(realFz);

    fontSizeRadio = setFz / realFz;
  }

  var setBaseFontSize = function () {
    var deviceWidth = docEle.clientWidth;
    var deviceHeight = docEle.clientHeight;

    if (isLandScape) {
      deviceWidth = deviceHeight;
    }
    var html = document.getElementsByTagName('html')[0];
    html.setAttribute('style', `font-size:${deviceWidth * fontSizeRadio}px`)
  };

  setBaseFontSize();

  var timer;
  window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(setBaseFontSize, 300);
  }, false);
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      clearTimeout(timer);
      timer = setTimeout(setBaseFontSize, 300);
    }
  }, false);
})(window, document);
