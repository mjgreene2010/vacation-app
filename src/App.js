import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom"

import "./Css/App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Entry from "./Entry";

class App extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="App">
        <div >
          <Router>
            <React.Fragment>

              <Link to="/" style={{ textDecoration: 'none', margin: 'auto' }}>
                <h1>Vacation Planning</h1>
              </Link>

              <Entry />

              <Route exact path="/login" render={props => <Login {...props} />} />


              <Route exact path="/signup" render={props => <SignUp {...props} />} />

            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
