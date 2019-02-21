import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar--navbar-fade">
    <ul className="fade">
      <li>
        <NavLink to="/" className="navbar__navlink">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="navbar__navlink">
          <span>About</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="navbar__navlink">
          <span>Contact</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
