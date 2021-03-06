import React from 'react';
import { Link } from 'react-router-dom';

const entry = props => {
  // console.log(props.onLogIn)
  return (
    <div>
      {' '}
      {props.onLogIn ? (
        <div>
          <Link to={'/signup'}> Sign Up </Link>
        </div>
      ) : (
        <div>
          <Link to={'/login'}> Login </Link>
          {'   '}
          <Link to={'/signup'}> Sign Up </Link>
        </div>
      )}
    </div>
  );
};

export default entry;
