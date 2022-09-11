import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <p className="logo">Lopez Dev</p>
      <nav className="links">
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='projects'>Projects</Link>
      </nav>
    </div>
  );
};

export default Navbar;
