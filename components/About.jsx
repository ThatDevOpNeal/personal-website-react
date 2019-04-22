import React from 'react';
import {
  CB_FRONT_END,
  CB_BACK_END,
  CB_APPS,
  CB_CLOUD,
} from '../const/skill';
import Card from './Card';

const About = () => (
  <div className="half-container__about fade">
    <h2 className="header faa-tada animated-hover">What Do I Do?</h2>
    <br />
    <div className="row">
      <div className="col-1-of-2">
        <Card cardFront="Front End" cardBack={CB_FRONT_END} cardNumber="1" />
      </div>
      <div className="col-1-of-2">
        <Card cardFront="Back End" cardBack={CB_BACK_END} cardNumber="2" />
      </div>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <Card cardFront="Mobile Apps" cardBack={CB_APPS} cardNumber="3" />
      </div>
      <div className="col-1-of-2">
        <Card cardFront="Cloud" cardBack={CB_CLOUD} cardNumber="4" />
      </div>
    </div>
    <br />
    <h2 className="header faa-tada animated-hover">Favorite Quotes</h2>
    <p>
      <i>&quot;Be the change that you wish to see in the world.&quot;</i>
      {' '}
-
      Mahatma Gandhi
    </p>
    <p>
      <i>
        &quot;Every champion was once a contender who refused to give up.&quot;
      </i>
      {' '}
      - Rocky Balboa
    </p>
    <br />
  </div>
);

export default About;
