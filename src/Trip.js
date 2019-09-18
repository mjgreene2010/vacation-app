import React from 'react';
import Likes from './Likes';
import { Link } from 'react-router-dom';

const trip = props => {
  console.log(props);

  return (
    <div>
      Name: <input className="" onChange={props.handleChange}></input>{' '}
      <button onClick={props.addName}> Enter </button>
      <ol>
        {props.tripName.map(name => {
          return (
            <Link to={name} style={{ textDecoration: 'none' }}>
              <li>
                {name} <Likes />
                <br style={{ lineHeight: '2rem' }} />
              </li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
};

export default trip;
