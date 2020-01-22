import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Css/App.css';
import Entry from './Component/Entry';
// import Likes from './Likes';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import Destinations from './Component/Destinations';

class App extends Component {
  state = {
    onLogIn: false
  };

  // addName = name => {
  //   this.setState({ tripName: name });
  // };

  nameHandler = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
  };

  loginHandler = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
  };

  // togglelogin = () => {
  //   this.setState({ onLogIn: !onLogIn });
  // };

  render() {
    return (
      <div className="container-fluid">
        <div className="App">
          <Router>
            <React.Fragment>
              <div className="jumbotron jumbrotron-fluid" id="jumbotron">
                <Link to="/" style={{ textDecoration: 'none', margin: 'auto' }}>
                  <h1>Vacation Planning</h1>
                </Link>
                <Entry onLogIn={this.state.onLogIn} />
              </div>
              <NavBar />
              <Route
                exact
                path="/destinations"
                render={props => <Destinations></Destinations>}
              />
              <Route exact path="/" render={props => <Home></Home>} />
              <Route
                exact
                path="/login"
                render={props => (
                  <Login
                    {...props}
                    username={this.state.username}
                    password={this.state.password}
                    loginHandler={this.loginHandler}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => <SignUp {...props} />}
              />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
