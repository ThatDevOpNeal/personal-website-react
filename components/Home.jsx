import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="half-container__about fade">
    <h1 className="header faa-tada animated-hover">Welcome to my page!</h1>
    <h2 className="header header__secondary">
      I&apos;m Neal Bharucha, an excited developer and
      {' '}
      <i>near</i>
      {' '}
avid coffee
      drinker.
    </h2>
    <p>
      I&apos;ve always loved the collaboration and interaction required in order
      to create the best product. The overlap between teams, especially design
      and development, never fails to show me that there is always room to
      improve. I enjoy every aspect of front-end development, back-end
      development, and a
      {' '}
      <i>
        <b>nice</b>
      </i>
      {' '}
      pour over of course :)
    </p>
    <p> Want to speak to me? </p>
    <NavLink to="/contact">
      {/* style the NavLink above to get rid of link features if wanted */}
      <p>Get in touch!</p>
    </NavLink>
  </div>
);

export default Home;
