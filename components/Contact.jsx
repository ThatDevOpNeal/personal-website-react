import React from 'react';

import Linkedin from './Linkedin';
import Email from './Email';

const Contact = () => (
  <div className="fade">
    <link
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <h1 className="right-side-title">Contact Information</h1>
    <ul className="full-width-center-ul margin-padding-zero">
      <li>
        <Linkedin />
      </li>
      <li>
        <Email />
      </li>
    </ul>
  </div>
);

export default Contact;
