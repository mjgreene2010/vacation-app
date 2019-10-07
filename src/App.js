import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Css/App.css';
import Entry from './Component/Entry';
// import Likes from './Likes';
import Login from './Component/Login';
import NavBar from './Component/NavBar';
import SignUp from './Component/SignUp';
import Trips from './Component/Trips';

class App extends Component {
  state = {
    trips: [],
    username: '',
    password: '',
    onLogIn: false
  };

  getData = () => {
    fetch('http://localhost:4000/Trips')
      .then(res => res.json())
      .then(trips => {
        this.setState({ trips });
      });
    // .catch(console.log);
  };

  componentDidMount = () => {
    this.getData();
  };

  // addName = name => {
  //   this.setState({ tripName: name });
  // };

  nameHandler = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
  };

  likesCounter = id => {
    this.state.trips.find(trip => {
      if (id === trip.id) {
        this.setState({
          likesCount: (trip.likesCount += 1)
        });
      }
    });
  };

  loginHandler = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
  };

  togglelogin = () => {
    // this.setState({ onLogIn: !onLogIn })
  };

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <React.Fragment>
              <Link to="/" style={{ textDecoration: 'none', margin: 'auto' }}>
                <h1>Vacation Planning</h1>
              </Link>

              <Entry onLogIn={this.state.onLogIn} />

              <NavBar />

              {/* <Likes likesCount={this.state.likesCount} likesCounter={this.likesCounter} /> */}

              <Trips
                addName={this.addName}
                trips={this.state.trips}
                nameHandler={this.nameHandler}
                likesCounter={this.likesCounter}
              />

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
