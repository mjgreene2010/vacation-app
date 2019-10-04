import React, { Component } from 'react';
// import Likes from './Likes';
import { Link } from 'react-router-dom';

export default class Trips extends Component {
  state = {
    isTripOpen: true
  };

  render() {
    // console.log(this.props);
    return this.state.isTripOpen ? (
      <div>
        <ol>
          {this.props.trips.map(trip => {
            return (
              <div>
                <li key={trip.id}>
                  <Link
                    to={trip.tripName}
                    key={trip.id}
                    style={{ textDecoration: 'none' }}
                  >
                    {trip.tripName}
                  </Link>{' '}
                  <button onClick={() => this.props.likesCounter(trip.id)}>
                    Likes: {trip.likesCount}
                  </button>
                </li>
                <br />
              </div>
            );
          })}
        </ol>

        <button onClick={() => this.setState({ isTripOpen: false })}>
          {' '}
          Add Trip{' '}
        </button>
      </div>
    ) : (
      <div className="addName">
        Name:{' '}
        <input
          type="string"
          className="tripName"
          onChange={this.props.nameHandler}
          value={this.props.tripName}
        ></input>{' '}
        <button> Enter </button>
        <br style={{ lineHeight: '2rem' }} />
        <button onClick={() => this.setState({ isTripOpen: true })}>
          {' '}
          Close{' '}
        </button>
      </div>
    );
  }
}
