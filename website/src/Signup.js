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
      inputUsername: "input",
      inputMail: "input",
      inputPassword: "input",
      inputPass: "input", //(confirmation)
      validUsername: false,
      validMail: false,
      validPass: false,
      firstTryUsername: true,
      firstTryEmail: true,
      firstTryPassword: true,
    };
    this.handleChecked = this.handleChecked.bind(this);
    // set this, because you need get methods from CheckBox
  }
  // checkbox
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  // signup login
  mySubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.isChecked) {
      if ((this.state.password === this.state.passwordConfirmation) & this.state.validUsername & this.state.validMail & this.state.validPass) {
        axios
          .post("/signup", {
            username: this.state.username.toLowerCase(),
            pass: this.state.password,
            email: this.state.email,
          })
          .then((response) => {
            console.log(response);
            this.props.history.push("/login");
           
          });
      } else {
        alert("Something is wrong check syntax");
      }
    } else {
      alert("check the box");
    }
  };

  // if email change
  emailHandler = (event) => {
    // name of attribut
    let nam = event.target.name;
    // value of attribut
    let val = event.target.value;
    this.setState({ [nam]: val });
    let first = "firstTryEmail";
    this.setState({ [first]: false });
    // email
    let mail = "inputMail";
    let valide = "validMail";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      // email not valid
      this.setState({ [mail]: "input is-danger" });
      this.setState({ [valide]: false });
    } else {
      // check email is exist
      axios.get(`/api/email/${val}`).then((response) => {
        if (response.data.length === 0) {
          this.setState({ [mail]: "input is-success" });
          this.setState({ [valide]: true });
        } else {
          this.setState({ [mail]: "input is-danger" });
          this.setState({ [valide]: false });
        }
      });
    }
  };

  // change state username
  usernameHandler = (event) => {
    // name of attribut
    let nam = event.target.name;
    // value of attribut
    let val = event.target.value;
    this.setState({ [nam]: val });
    
    // username
    let inputUser = "inputUsername";
    let valide2 = "validUsername";
    let first = "firstTryUsername";
    this.setState({ [first]: false });
    // user already exist ?
    if(!/\s/.test(String(val)) && val !== ""){
      axios.get(`/api/username/${val.toLowerCase()}`).then((response) => {
        if (response.data.length === 0) {
          this.setState({ [inputUser]: "input is-success" });
          this.setState({ [valide2]: true });
        } else {
          if (val === "") {
          } else {
            this.setState({ [inputUser]: "input is-danger" });
            this.setState({ [valide2]: false });
          }
        }
      })
    } 
    
  };
  
  // change state password
  passwordHandler = (event) => {
    // name of attribut
    let nam = event.target.name;
    // value of attribut
    let val = event.target.value;

    this.setState({ [nam]: val });

    if (nam === "passwordConfirmation") {
      // passwordConfirmation
      let inputPass = "inputPass";
      if (val === this.state.password) {
        this.setState({ [inputPass]: "input is-success" });
      } else {
        this.setState({ [inputPass]: "input is-danger" });
      }
    } else if (nam === "password") {
      let first = "firstTryPassword";
      this.setState({ [first]: false });
      // password
      let valide3 = "validPass";
      let inputPass = "inputPassword";
      if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/.test(val)) {
        // strong
        this.setState({ [inputPass]: "input is-success" });
        this.setState({ [valide3]: true });
      } else {
        // weak
        this.setState({ [inputPass]: "input is-danger" });
        this.setState({ [valide3]: false });
      }
    }
  };
  // html
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6-tablet is-5-desktop is-4-widescreen">
              <div className="notification">
                <form onSubmit={this.mySubmitHandler}>
                  {/* <!-- USERNAME --> */}
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        onChange={this.usernameHandler}
                        name="username"
                        className={this.state.inputUsername}
                        type="text"
                        placeholder="Username input"
                        id="username"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>

                      {this.state.firstTryUsername ? (
                        <div></div>
                      ) : this.state.validUsername ? (
                        <p className="help is-success">This username is available</p>
                      ) : (
                        <p className="help is-danger">This username is not available</p>
                      )}
                    </div>
                  </div>

                  {/* <!-- EMAIL --> */}
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        onChange={this.emailHandler}
                        name="email"
                        className={this.state.inputMail}
                        type="email"
                        placeholder="Email input"
                        id="email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      {this.state.firstTryEmail ? (
                        <div></div>
                      ) : this.state.validMail ? (
                        <p className="help is-success">This mail is available</p>
                      ) : (
                        <p className="help is-danger">This mail is not available </p>
                      )}
                    </div>
                  </div>

                  {/* <!-- PASSWORD --> */}
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        onChange={this.passwordHandler}
                        name="password"
                        className={this.state.inputPassword}
                        type="password"
                        placeholder="Password input"
                        id="password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    {this.state.firstTryPassword ? (
                      <div></div>
                    ) : this.state.validPass ? (
                      <p className="help is-success">Strong password</p>
                    ) : (
                      <p className="help is-danger">
                        the password must contain one upper case letter, one lower case letter, one number and be 8 in size.
                      </p>
                    )}
                    <br></br>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        onChange={this.passwordHandler}
                        name="passwordConfirmation"
                        className={this.state.inputPass}
                        type="password"
                        placeholder="Password confirmation"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>

                  <label className="checkbox">
                    <input onChange={this.handleChecked} type="checkbox" id="checkbox" />I agree to the terms and conditions.
                  </label>
                  <br />
                  <br />

                  <div className="control">
                    <button className="button is-link" value="Submit" id="submit">
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

export default Signup;
