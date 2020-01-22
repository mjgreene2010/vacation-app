import React, { Component } from 'react';
import { Trip } from './Trip';
import { connect } from 'react-redux';

class _Trips extends Component {
  state = {
    isTripOpen: true
  };

  componentDidMount = () => {
    this.props.fetchTrips();
  };

  render() {
    return this.state.isTripOpen ? (
      <div>
        <div style={{ textDecoration: 'none' }}>
          {this.props.trips.map(trip => {
            return (
              <div>
                <Trip
                  key={trip.id}
                  trip={trip}
                  // likesCounter={this.props.likesCounter}
                ></Trip>
              </div>
            );
          })}
        </div>

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

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrips: () => dispatch({ type: 'FETCH_TRIPS' })
});

export const Trips = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Trips);
