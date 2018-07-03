import * as React from 'react';

import './jobsItem.css';

const random = (_: any) => Math.floor(Math.random() * 10) + 1;

const JobsItem = ({
  company,
  size,
  site
}: {
  company: string;
  size: string;
  site: string;
}) => {
  return (
    <div className="box box-is-75">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>
                {random(1) > 5 ? 'Software Developer' : 'Software Engineer'}
              </strong>{' '}
              <small>@{company}</small> | <small>size: {size}</small>
              <br />
              We are looking for a passionate Software Engineer to design,
              develop and install software solutions.
              <br />
              <br />
              Software Engineer responsibilities include gathering user
              requirements, defining system functionality and writing code in
              various languages, like Typescript, Ruby on Rails or Node.js
              programming languages (e.g. C++ or Elixir.) Our ideal candidates
              are familiar with the software development life cycle (SDLC) from
              preliminary system analysis to tests and deployment.
            </p>
            <div className="is-pulled-right">
              <a href={site} className="button is-link">
                Visit site
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default JobsItem;
