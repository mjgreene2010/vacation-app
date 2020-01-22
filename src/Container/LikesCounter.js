import React, { Component } from 'react';
import { connect } from 'react-redux';

const _LikesCounter = props => {
  componentDidMount = () => {
    this.props.fetchTrips();
  };

  likeCounter = id => {
    this.state.trips.find(trip => {
      if (id === trip.id) {
        this.setState({
          likesCount: (trip.likesCount += 1)
        });
      }
    });
  };

  render();
  return (
    <div>
      <Trips></Trips>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrips: () => dispatch({ type: 'INCREASE_LIKES' })
});

export const LikesCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LikesCounter);
