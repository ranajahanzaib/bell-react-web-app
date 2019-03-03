import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xs-12 text-lg-left text-center">
                <p className="copyright-text">
                  © BELL Theme
                </p>
                <div className="credits">
                  {/*                   
                    All the links in the footer should remain intact.
                    You can delete the links only if you purchased the pro version.
                    Licensing information: https://bootstrapmade.com/license/
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Bell
                   */}
                  Template by <a href="https://bootstrapmade.com/">Bootstrap Templates</a>. Designed by <a href='https://twitter.com/Jahanzaibv2' target='_ublank'>@Jahanzaibv2</a>.
                </div>
              </div>
              <div className="col-lg-6 col-xs-12 text-lg-right text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#features">Features</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#team">Team</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
