import React, { Component } from 'react';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Parallax from './Components/Parallax';
import Features from './Components/Features';
import CTA from './Components/CTA';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import './Styles/Bootstrap.min.css';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Header />
        <About />
        <Parallax />
        <Features />
        <CTA />
        <Portfolio />
        <Team />
      </div>
    );
  }
}

export default App;
