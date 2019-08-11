import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from './app';

ReactDom.render(<App/>, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept()
}