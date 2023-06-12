import React from 'react';
import logo from '../../logo.svg';

import './About.css';

const About = () => {
  const version = '1.1.1.3';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">Running Google Analytics</p>
      </header>
      <p>version : {version}</p>
      <form>
        <input type="text" name="myInput" />
      </form>
    </div>
  );
};

export default About;
