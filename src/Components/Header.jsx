import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <a href="index.html"><img src="https://cdn.appzaib.com/public/bell/img/logo-nav.png" alt="" title="" /></a>
            {/* Uncomment below if you prefer to use a text image */}
            {/* <h1><a href="#hero">Bell</a></h1> */}
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#team">Team</a></li>
              <li className="menu-has-children"><a href="">Drop Down</a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="menu-has-children"><a href="#">Drop Down 2</a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                  <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
          <nav className="nav social-nav pull-right d-none d-lg-inline">
            <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-linkedin"></i></a> <a href="#"><i className="fa fa-envelope"></i></a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
