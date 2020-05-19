import React, { Component } from "react";
import axios from "axios";


// Login component
// with form
// and axios request
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", pass: "", log: false };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let user = this.state.user;
    let passW = this.state.pass;
    console.log("click");
    // login qerry
    axios
      .post("/login", {
        username: user,
        pass: passW,
      })
      .then((response) => {
        if (response.data !== "error") {
          localStorage.setItem("usernameStorage", response.data);
          console.log("done");
          let nam = "log";
          this.setState({ [nam]: true });
          this.props.history.push('/');
          window.location.reload(false);
        } else {
          alert("Wrong password or username");
        }
      });
  };

  myChangeHandler = (event) => {
    // name of attribut ( ex username)
    let nam = event.target.name;
    // value of attribut
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    // if (this.state.log) {
    //   // if log
    //   //return <Redirect to="/" />;
    // } else {
      return (
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-tablet is-5-desktop is-4-widescreen">
                <div className="notification">
                  <form onSubmit={this.mySubmitHandler}>
                    <h1>Hello {this.state.user} </h1>
                    <div className="field">
                      {/* user */}
                      <label className="label">Username</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input"
                          name="user"
                          type="text"
                          placeholder="username input"
                          onChange={this.myChangeHandler}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                        <span className="icon is-small is-right"></span>
                      </div>
                    </div>
                    {/* password */}
                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input"
                          name="pass"
                          type="password"
                          placeholder="Password input"
                          onChange={this.myChangeHandler}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                        <span className="icon is-small is-right"></span>
                      </div>
                    </div>
                    {/* button */}
                    <div className="control">
                      <button className="button buttoncolor1" value="Submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
// }

export default Login;
