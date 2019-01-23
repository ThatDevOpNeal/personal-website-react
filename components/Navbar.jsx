import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="inline-flex flex-justify-center fixed navbar-spread">
    <ul className="margin-padding-zero inline-flex flex-justify-center">
      <li className="inline-flex">
        <NavLink to="/" className="navlink">Home</NavLink>
      </li>
      <li className="inline-flex">
        <NavLink to="/about" className="navlink">About</NavLink>
      </li>
      <li className="inline-flex">
        <NavLink to="/contact" className="navlink">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
