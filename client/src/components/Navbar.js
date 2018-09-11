import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'blue',
    color: 'white'
  }
  
  const Navbar = () =>
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/new"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Start New Discussion</NavLink>
    </div>;

    export default Navbar;