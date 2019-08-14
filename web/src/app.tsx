import * as React from 'react';
import Layout from './component/layout/index';
import WithStyle from './hoc/withStyle';

import Style from '../static/scss/app.scss';

export interface IAppProps {
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className='m-app'>
        <Layout/>
      </div>
    );
  }
}

export default WithStyle(Style)(App)