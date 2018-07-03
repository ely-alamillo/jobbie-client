import * as React from 'react';
import { Component } from 'react';
import Hero from './hero/hero';
import JobsItem from './jobsItem/jobsItem';

import { data } from '../../../src/jobs_data';

interface IData {
  name: string;
  size: string;
  site: string;
  ceo: string;
}

class Jobs extends Component {
  public data: [IData] = data;

  public render() {
    return (
      <div>
        <Hero />
        {/* begin jobs list */}
        <section className="section has-background-white-ter">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                {this.data.map((x, i) => (
                  <JobsItem
                    key={i}
                    company={x.name}
                    size={x.size}
                    site={x.site}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Jobs;
