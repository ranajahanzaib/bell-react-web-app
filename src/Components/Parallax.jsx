import React, { Component } from 'react';

class Parallax extends Component {
  render() {
    return (
      <div className="block bg-primary block-pd-lg block-bg-overlay text-center" data-bg-img="https://cdn.appzaib.com/public/bell/img/parallax-bg.jpg" data-settings='{"stellar-background-ratio": 0.6}' data-toggle="parallax-bg">
        <h2>
          Welcome to a perfect theme
        </h2>
        <p>
          This is the most powerful theme with thousands of options that you have never seen before.
        </p>
        <img alt="Bell - A perfect theme" className="gadgets-img hidden-md-down" src="https://cdn.appzaib.com/public/bell/img/gadgets.png" />
      </div>
    );
  }
}

export default Parallax;
