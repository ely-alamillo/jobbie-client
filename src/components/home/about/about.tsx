import * as React from 'react';
import { Component } from 'react';
import server from '../../../img/big-server.svg';
import rocket from '../../../img/rocket.svg';

import './about.css';

class About extends Component {
  public render() {
    return (
      <div>
        <section className="section has-text-centered has-background-info about-section">
          <div className="container">
            <div className="columns">
              <div className="column is-vh-centered">
                <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-white">
                  What we've built
                </h1>
                <h2 className="subtitle is-size-5-desktop has-text-white has-text-justified">
                  Here at Jobbie we pride ourselves in being the best we can
                  possibly be. In order to live up to those expectations we have
                  put in all of our efforts in making Jobbie our lives work.
                  <br />
                  <br />
                  We have crafted a complex algorithm to find the most exciting
                  and freshest job for everyon who visits our site. Endless
                  hours have been spent to build the best algorithm possible so
                  that we can deliver on our promise.
                </h2>
              </div>
              <div className="column ">
                <figure className="image is-4by5">
                  <img src={server} alt="Gears" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-text-centered has-background-white">
          <div className="container">
            <div className="columns">
              <div className="column ">
                <figure className="image is-square">
                  <img src={rocket} alt="Rocket" />
                </figure>
              </div>
              <div className="column is-vh-centered">
                <h1 className="title is-spaced is-size-desktop is-size-4-mobile has-text-black">
                  Our Vision
                </h1>
                <h2 className="subtitle is-size-5-desktop has-text-black has-text-justified">
                  As engineers we know how hard it can be to find a perfect job.
                  Here at Jobbie we envison making the job search a breeze and
                  help you land the next big job. Let's us help you lauch your
                  career!
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
