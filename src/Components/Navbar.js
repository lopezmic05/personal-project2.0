import React from "react";
import { Link } from "react-router-dom";

import './CSS/navbar.css'

const Navbar = () => {
  return (
    <div className="navBody">
      <span className='logo'>Lopez Dev</span>
      <nav className='links' id="links">
        <Link exact to='/'>Home</Link>
        <Link to='about'>About Me</Link>
        <Link to='portfolio'>Portfolio</Link>
      </nav>
    </div>
  );
};

export default Navbar;
