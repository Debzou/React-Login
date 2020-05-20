import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

// clear token
// redirect to home page
class Logout extends Component {
  render() {
    axios.get("/logout").then(()=>console.log('session server deleted'))
    localStorage.clear();    
    return (
      <div>
        <Redirect to="/login" />        
      </div>
    );
  }
}

export default Logout;
