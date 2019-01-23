import React from 'react';
import '../public/static/css/style.css';

const Navbar = () => (
  <nav className="inline-flex flex-justify-center fixed navbar-spread">
    <ul className="margin-padding-zero inline-flex flex-justify-center">
      <li className="inline-flex">
        <a href="/">Home</a>
      </li>
      <li className="inline-flex">
        <a href="/about">About</a>
      </li>
      <li className="inline-flex">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
