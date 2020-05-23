import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Forum from "./Forum";

class ProtectedRoute extends Component {
  render() {
      const { component: Component, ...props } = this.props;
      return (
          <Route
              {...props}
              render={props => (
                  !(!localStorage.getItem('usernameStorage')) ?
                      <Component {...props} /> :
                      <Redirect to='/login' />
              )}
          />
      )
      
  }
}


class App extends Component {
  
  render() {
    return (      
      <Router>        
        <div id="content-wrap">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forum" component={Forum} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
            {/* <Route path="/thread/:idthread" component={thread} /> */}
            <ProtectedRoute path="/profile" component={Profile} />
            {/* if there is a random person */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
