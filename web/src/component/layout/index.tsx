import * as React from 'react';

import './index.scss';

interface IAppProps {
}

const Layout: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <ul className="menu">
      <li className="menu-item">
        menu1
      </li>
      <li className="menu-item">
        menu2
      </li>
    </ul>
  )
};

export default Layout;
