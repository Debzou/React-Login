import React, { Component } from "react";
import axios from "axios";

class Home extends Component {

  render() {
    axios.get("/isConnected").then((res)=>console.log(res.data))
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
