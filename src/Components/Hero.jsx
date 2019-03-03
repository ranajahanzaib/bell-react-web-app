import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <a className="hero-brand" href="index.html" title="Home"><img alt="Bell Logo" src="https://cdn.appzaib.com/public/bell/img/logo.png" /></a>
            </div>
          </div>

          <div className="col-md-12">
            <h1>
                A theme with personality
              </h1>

            <p className="tagline">
              This is a powerful theme with some great features that you can use in your future projects.
            </p>
            <a className="btn btn-full" href="#about">Get Started Now</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
