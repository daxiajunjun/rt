import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';


const RouterApp = () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}


ReactDom.render(<RouterApp />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept()
}