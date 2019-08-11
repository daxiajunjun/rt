
import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

import '../static/scss/app.scss';

ReactDom.render(<App/>, document.querySelector('#root'));

// react hot
if (module.hot) {
  module.hot.accept();
}
