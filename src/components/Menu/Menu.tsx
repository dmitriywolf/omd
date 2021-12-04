import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <NavLink exact to="/" className="menu__link" activeClassName="_active">Home</NavLink>
      <NavLink to="/about" className="menu__link" activeClassName="_active">About team</NavLink>
    </div>
  )
};

export default Menu;
