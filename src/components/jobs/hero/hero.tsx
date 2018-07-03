import * as React from 'react';
import { Component } from 'react';

import './hero.css';

class Hero extends Component {
  public render() {
    return (
      <section className="hero has-text-left is-medium is-marginless hero-jobs-gradient">
        <div className="hero-body hero-jobs">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title has-text-white is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile ">
                  Jobs.
                </h1>
                <h2 className="subtitle is-size-4-desktop has-text-white">
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
export default Hero;
