import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom"

import "./Css/App.css";
import Entry from "./Entry";
import Likes from './Likes'
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Trip from './Trip';


class App extends Component {
  state = {
    tripName: ["Miami Resurgence", "Dropping the Ball in New York", "Leaving the country Canada"],
    username: "",
    password: "",
    likesCount: 0,
    onLogIn: false
  };

  addName = () => { }

  nameHandler = e => {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  likesCounter = () => {
    this.setState({
      likesCount: this.state.likesCount + 1
    })
  }

  loginHandler = (e) => {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  togglelogin = () => {
    // this.setState({ onLogIn: !onLogIn })
  }


  render() {
    // console.log(likesCount)
    return (
      <div className="App">
        <div >


          <Router>
            <React.Fragment>


              <Link to="/" style={{ textDecoration: 'none', margin: 'auto' }}>
                <h1>Vacation Planning</h1>
              </Link>

              <Entry onLogIn={this.state.onLogIn} />

              <NavBar />


              {/* <Likes likesCount={this.state.likesCount} likesCounter={this.likesCounter} /> */}

              <Trip addName={this.addName} tripName={this.state.tripName} nameHandler={this.nameHandler} likesCount={this.state.likesCount} />



              <Route exact path="/login" render={props => <Login {...props} username={this.state.username} password={this.state.password} loginHandler={this.loginHandler} />} />


              <Route exact path="/signup" render={props => <SignUp {...props} />} />

            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
