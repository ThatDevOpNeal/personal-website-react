import React from 'react';

import Linkedin from './Linkedin';
import Email from './Email';
import Codewars from './Codewars';

const Contact = () => (
  <div className="fade">
    <div className="text-align-center">
      <h1 className="header half-container--right-side-title faa-tada animated-hover">Contact Information</h1>
    </div>
    <ul className="half-container__contact-ul">
      <li>
        <Linkedin />
      </li>
      <li>
        <Email />
      </li>
      <li>
        <Codewars />
      </li>
    </ul>
  </div>
);

export default Contact;
