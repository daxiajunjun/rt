import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from './app';


const RouterApp = () => {
  return (
    <App/>
  )
}


ReactDom.hydrate(<RouterApp />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept()
}