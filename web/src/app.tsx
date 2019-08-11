import * as React from 'react';

import '../static/scss/app.scss';
export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className='m-app'>
        hello zhongg
      </div>
    );
  }
}