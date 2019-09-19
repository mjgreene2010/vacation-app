import React, { Component } from 'react';
import Likes from './Likes';
import { Link } from 'react-router-dom';

export default class Trip extends Component {
  state = {
    isTripOpen: true
  };

  // const trip = (props, { open, setOpen }) => {

  render() {
    console.log(this.props.trips);
    return this.state.isTripOpen ? (
      <div>
        <ol>
          {this.props.trips.map(trip => {
            return (
              <Link
                to={trip.tripName}
                key={trip.id}
                style={{ textDecoration: 'none' }}
              >
                <li>
                  {trip.tripName}{' '}
                  <Likes
                    likes={trip.likesCount}
                    likesCounter={this.likesCounter}
                  >
                    {' '}
                  </Likes>
                  <br style={{ lineHeight: '2rem' }} />
                </li>
                <br />
              </Link>
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
