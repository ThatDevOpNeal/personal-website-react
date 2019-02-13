import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Particles from 'react-particles-js';
import Title from './Title';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import '../public/static/css/style.css';
import '../public/static/css/animations.css';

const particlesParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const App = () => (
  <HashRouter>
    <Fragment>
      <Particles
        params={particlesParams}
        className="particle-container"
      />
      <div className="main-container">
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <Navbar />
        <div className="half-container mobile-title">
          <Title />
        </div>
        <div className="half-container mobile-container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </Fragment>
  </HashRouter>
);

export default hot(module)(App);
