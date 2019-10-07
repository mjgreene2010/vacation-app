import React from 'react';
import { Link } from 'react-router-dom';

const trip = props => {
  return (
    <div>
      <li key={props.trip.key}>
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
      </li>
      <br />
    </div>
  );
};

export default trip;
