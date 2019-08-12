import * as React from 'react';

import Welcome from './container/welcome/index';
import Home from './container/home/index';
import Layout from './component/layout/index';

import '../static/scss/app.scss';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className='m-app'>
        <Layout/>
      </div>
    );
  }
}