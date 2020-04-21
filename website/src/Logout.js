import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// clear token
// redirect to home page
class Logout extends Component {
  render() {
    localStorage.clear();
    
    return (
      <div>
        <Redirect to="/login" />
        
      </div>
    );
  }
}

export default Logout;
