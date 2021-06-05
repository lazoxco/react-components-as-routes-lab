import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink style={link} activeStyle={{background: 'darkblue'}} to="/" exact >Home</NavLink>
      <NavLink style={link} activeStyle={{background: 'darkblue'}} to="/movies" exact >Movies</NavLink>
      <NavLink style={link} activeStyle={{background: 'darkblue'}} to="/directors" exact >Directors</NavLink>
      <NavLink style={link} activeStyle={{background: 'darkblue'}} to="/actors" exact >Actors</NavLink>
    </div>
  );
};

export default NavBar;
