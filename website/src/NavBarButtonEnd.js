import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavBarButtonEnd extends Component {
  
  render() {
    if (localStorage.getItem("usernameStorage")) {
      return (
        <span>
          <div className="field is-ground">
            <p className="control">
              <Link className="button buttoncolor1" to="/profile">
                <span className="icon">
                  <i className="fas fa-user-circle"></i>
                </span>
                <span>Profile</span>
              </Link>
              &nbsp;
              <Link className="button buttoncolor3" to="/logout">
                <span className="icon">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
                <span>Log Out</span>
              </Link>
            </p>
          </div>
        </span>
      );
    } else {
      return (
        <span>
          <div className="field is-ground">
            <p className="control">
              <Link className="button buttoncolor1" to="/login">
                <span className="icon">
                  <i className="fas fa-door-open"></i>
                </span>
                <span>Log In</span>
              </Link>
              &nbsp;
              <Link className="button buttoncolor2" to="/signup">
                <span className="icon">
                  <i className="fas fa-sign-in-alt"></i>
                </span>
                <span>Sign Up</span>
              </Link>
            </p>
          </div>
        </span>
      );
    }
  }
}

export default NavBarButtonEnd;
