import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const _Trip = props => {
  return (
    <div>
      <div key={props.trip.key}>
        <Link
          to={props.trip.tripName}
          key={props.trip.id}
          style={{ textDecoration: 'none' }}
        >
          {props.trip.tripName}
        </Link>{' '}
        <button onClick={() => props.likesCounter(props.trip.id)}>
          Likes: {props.trip.likesCount}
        </button>
      </div>
      <br />
    </div>
  );
};

export const Trip = withRouter(_Trip);
