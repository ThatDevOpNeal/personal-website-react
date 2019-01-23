import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="inline-flex flex-justify-center fixed navbar-spread navbar-fade">
    <ul className="margin-padding-zero inline-flex flex-justify-center fade">
      <li className="inline-flex">
        <NavLink to="/" className="navlink">
          <span>Home</span>
        </NavLink>
      </li>
      <li className="inline-flex">
        <NavLink to="/about" className="navlink">
          <span>About</span>
        </NavLink>
      </li>
      <li className="inline-flex">
        <NavLink to="/contact" className="navlink">
          <span>Contact</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
