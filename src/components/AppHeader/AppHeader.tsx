import React from 'react';
import Menu from '../Menu';
import AppLogo from '../AppLogo';

import './AppHeader.css';

const AppHeader = () => {

  return (
    <header className="app__header">
      <div className="container app__header-inner">
        <AppLogo/>
        <Menu/>
      </div>
    </header>
  )
};

export default AppHeader;
