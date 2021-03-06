import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Component } from 'react';

import './navigation.css';

class Navigation extends Component {
  public navToggle = () => {
    // ! is a typescript hack, need to revist implementation
    document.querySelector('.navbar-menu')!.classList.toggle('is-active');
  };

  public render() {
    return (
      <nav
        className="navbar has-background-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">
                {/* <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                /> */}
                <h1 className="title has-text-white">Jobbie</h1>
              </Link>
            </div>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={this.navToggle}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <div className="navbar-item">
                <NavLink
                  to="/"
                  className="is-medium is-link"
                  activeClassName="is-active"
                  exact={true}
                >
                  <p className="has-text-white">Home</p>
                </NavLink>
              </div>
              <div className="navbar-item">
                <NavLink
                  to="/jobs"
                  className="is-medium is-link"
                  activeClassName="is-active"
                  exact={true}
                >
                  <p className="has-text-white">Jobs</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
