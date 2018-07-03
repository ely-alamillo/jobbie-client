import * as React from 'react';
import { Component } from 'react';

import './hero.css';

class Footer extends Component {
  public render() {
    return (
      <section className="hero hero-about has-text-left has-background-white is-large is-marginless">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title has-text-black is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile ">
                  Jobbie
                </h1>
                <h2 className="subtitle is-size-4-desktop has-text-black">
                  Let's us make the job searching process better for you.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
