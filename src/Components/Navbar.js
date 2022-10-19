import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <p className='logo'>Michael Lopez</p>
      <nav className='links'>
        <Link exact to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='projects'>Projects</Link>
        <Link to='contact'>Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
