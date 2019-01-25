import React from 'react';

import Linkedin from './Linkedin';
import Email from './Email';

const Contact = () => (
  <div className="fade">
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

// <link
//   rel="stylesheet"
//   href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
//   integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
//   crossOrigin="anonymous"
// />;
