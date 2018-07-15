import React, { Component } from 'react';
import logo from './logo.svg';
import image1 from './images/portfolio1.jpg';
import image2 from './images/portfolio2.jpg';
import image3 from './images/portfolio3.jpg';
import image4 from './images/portfolio4.jpg';
import image5 from './images/portfolio5.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">
            BG ARTISTRY
          </div>
          <div className="nav-links">
            <span>Home</span>
            <span>Work</span>
            <span>About</span>
            <span>Contact</span>
            <span>FAQs</span>
          </div>
        </header>
        <p className="App-intro">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          
        </p>
      </div>
    );
  }
}

export default App;
