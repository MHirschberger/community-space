import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#191970',
  textDecoration: '#191970',
  color: 'white',
}

const Navbar = () => 

    <div>
    <NavLink
      className='navbar'
      to="/"
      exact
      style={link}
      activeStyle={{
        background: '#4169E1'
      }}
    >Home</NavLink>
    <NavLink
      className='navbar'
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: '#4169E1'
      }}
    >About</NavLink>
    <NavLink
      className='navbar'
      to="/discussions"
      exact
      style={link}
      activeStyle={{
        background: '#4169E1'
      }}
    >Browse Discussions</NavLink>
    <NavLink
      className='navbar'
      to="/discussions/new"
      exact
      style={link}
      activeStyle={{
        background: '#4169E1'
      }}
    >Start New Discussion</NavLink>
    {/* <NavLink
      className='navbar'
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: '#4169E1'
      }}
      >Login/Account</NavLink> */}
    </div>
  

export default Navbar;
    