import React, { Component } from 'react';

class CTA extends Component {
  render() {
    return (
      <section className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-12 text-lg-left text-center">
              <h2>
                Call to Action Section
              </h2>
              <p>
                Lorem ipsum dolor sit amet, nec ad nisl mandamus imperdiet, ut corpora cotidieque cum. Et brute iracundia his, est eu idque dictas gubergren
              </p>
            </div>
            <div className="col-lg-3 col-sm-12 text-lg-right text-center">
              <a className="btn btn-ghost" href="https://github.com/Jahanzaibv2/bell-react-web-app" target='_ublank'>Download This Template</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
