import React, { Component } from "react";
import {Link} from "react-router-dom";

class NavBarButtonEnd extends Component {
  
  logout = (event) =>{
    event.preventDefault();
    console.log('logout');
    localStorage.clear();
    window.location.reload(false);
  }
  render() {
    if (localStorage.getItem("usernameStorage")) {
      return (
        <span>
          <div className="field is-ground">
            <p className="control">
              <Link className="button is-dark" to="/profile">
                <span className="icon">
                  <i className="fas fa-user-circle"></i>
                </span>
                <span>Profile</span>
              </Link>
              &nbsp;
              <button className="button is-danger" onClick={this.logout}>
                <span className="icon">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
                <span>Log Out</span>
              </button>
            </p>
          </div>
        </span>
      );
    } else {
      return (
        <span>
          <div className="field is-ground">
            <p className="control">
              <Link className="button is-success" to="/login">
                <span className="icon">
                  <i className="fas fa-door-open"></i>
                </span>
                <span>Log In</span>
              </Link>
              &nbsp;
              <Link className="button is-primary" to="/signup">
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
