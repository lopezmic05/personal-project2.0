import React from "react";
import { Link } from "react-router-dom";

import './CSS/navbar.css'

const Navbar = () => {
  return (
    <div className="navBody">
      <span className='logo'>Lopez Dev</span>
      <nav className='links' id="links">
        <Link id="links" exact to='/'>Home</Link>
        <Link id="links" to='about'>About Me</Link>
        <Link id="links" to='projects'>Projects</Link>
      </nav>
    </div>
  );
};

export default Navbar;
