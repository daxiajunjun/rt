import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './app';


const RouterApp = () => {
  return (
    <HashRouter>
      <App/>
    </HashRouter>
  )
}


ReactDom.render(<RouterApp />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept()
}