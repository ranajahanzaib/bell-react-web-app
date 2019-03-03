import React, { Component } from 'react';
import Hero from './Components/Hero';
import Header from './Components/Header';
import './Styles/Bootstrap.min.css';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Header />
      </div>
    );
  }
}

export default App;
