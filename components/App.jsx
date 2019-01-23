import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Title from './Title';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import '../public/static/css/style.css';

const App = () => (
  <BrowserRouter>
    <div className="main-container">
      <Navbar />
      <div className="half-container">
        <Title />
      </div>
      <div className="half-container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default hot(module)(App);
