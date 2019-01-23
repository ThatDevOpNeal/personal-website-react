import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import '../public/static/css/style.css';

const Main = () => (
  <div className="main-container">
    <Navbar />
    <div className="half-container">
      <Title />
    </div>
    <div className="half-container">
      <h1 className="right-side-title">Welcome To My Website!</h1>
    </div>
  </div>
);

export default Main;
