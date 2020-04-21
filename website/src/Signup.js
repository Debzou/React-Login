import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isChecked: false,
    };
    this.handleChecked = this.handleChecked.bind(this);
    // set this, because you need get methods from CheckBox
  }
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }
  // signup login
  mySubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.isChecked) {
      if(this.state.password ===this.state.passwordConfirmation){
        axios
        .post("/signup", {
          username: this.state.username,
          pass: this.state.password,
          email: this.state.email
        })
        .then((response) => {
          console.log(response);
          this.props.history.push("/login");
        });
      }else{
        alert('not the same password')
      }
      
    } else {
      alert("check the box");
    }
  };
  // change state
  myChangeHandler = (event) => {
    // name of attribut ( ex username)
    let nam = event.target.name;
    // value of attribut
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  // html
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6-tablet is-5-desktop is-4-widescreen">
              <div className="notification">
                {/* <!-- USERNAME --> */}
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      onChange={this.myChangeHandler}
                      name="username"
                      className="input"
                      type="text"
                      placeholder="Username input"
                      id="username"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                {/* <!-- EMAIL --> */}
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      onChange={this.myChangeHandler}
                      name="email"
                      className="input"
                      type="email"
                      placeholder="Email input"
                      id="email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                {/* <!-- PASSWORD --> */}
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      onChange={this.myChangeHandler}
                      name="password"
                      className="input"
                      type="password"
                      placeholder="Password input"
                      id="password"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <br></br>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      onChange={this.myChangeHandler}
                      name="passwordConfirmation"
                      className="input"
                      type="password"
                      placeholder="Password confirmation"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>

                  <p id="password_force_bar" className="help">
                    <progress
                      className="progress is-danger"
                      value="0"
                      max="100"
                    ></progress>
                  </p>

                  <p id="p_password" className="help"></p>
                </div>

                <label className="checkbox">
                  <input
                    onChange={this.handleChecked}
                    type="checkbox"
                    id="checkbox"
                  />
                  I agree to the terms and conditions.
                </label>
                <br />
                <br />

                <div className="control">
                  <button
                    onClick={this.mySubmitHandler}
                    className="button is-link"
                    value="Submit"
                    id="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
