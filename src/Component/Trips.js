import React, { Component } from 'react';
import Trip from './Trip';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class Trips extends Component {
  state = {
    isTripOpen: true
  };

  render() {
    return this.state.isTripOpen ? (
      <div>
        <ol>
          {this.props.trips.map(trip => {
            return (
              <div>
                <Trip trip={trip} likesCounter={this.props.likesCounter}></Trip>
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

const mapStateToProps = state => {
  return {
    likes: state.likesCount
  };
};

const mapDispatchToProps = dispatch => {};

export const connectLikes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);
