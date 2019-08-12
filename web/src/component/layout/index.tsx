import * as React from 'react';
import { Link } from 'react-router-dom'

import './index.scss';

interface IAppProps {
}

const Layout: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <Link to='/home'>home</Link>
      </li>
      <li className="menu-item">
      <Link to='/welcome'>welcome</Link>
      </li>
    </ul>
  )
};

export default Layout;
