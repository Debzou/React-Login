import React, { Component } from "react";
import axios from "axios";

// clear token
// redirect to home page
class Logout extends Component {
  constructor(props){
    super(props);
    axios.get("/logout-server");
    localStorage.clear(); 
    this.props.history.push('/login')
  }
  render() {   
    return (
      <div></div>
    );
  }
}

export default Logout;
