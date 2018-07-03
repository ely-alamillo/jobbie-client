import * as React from 'react';
import { Component } from 'react';
import About from './about/about';
import Hero from './hero/hero';

class Home extends Component {
  public render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default Home;
