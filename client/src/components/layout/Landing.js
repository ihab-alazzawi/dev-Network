import React, { Component } from 'react';
import Codemp4 from '../../img/Love-Coding.mp4';
import Codeogv from '../../img/Love-Coding.ogv';
import Codewebm from '../../img/Love-Coding.webm';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <video id="background" autoPlay loop muted>
          <source src={Codemp4} type="video/mp4" />
          <source src={Codeogv} type="video/ogg" />
          <source src={Codewebm} type="video/ogg" />
        </video>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Network</h1>
                <p className="lead">
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <a href="signup.html" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="signin.html" className="btn btn-lg btn-light">
                  Signin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;