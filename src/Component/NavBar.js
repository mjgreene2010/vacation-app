import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = props => {
  const link = {
    // width: 'medium'
    // color: 'black'
    // display: 'inline-block'
    // textDecoration: 'none'
    margin: '20px',
    border: 'solid 3px'
    // marginTop: '1px'
    // borderRadius: '15px',
    // padding: '5px'
  };

  return (
    <div>
      <NavLink
        className="btn badge-pill"
        to="/"
        exact
        style={link}
        activeStyle={{ background: 'black', color: 'white' }}
      >
        Home
      </NavLink>{' '}
      <NavLink
        className="btn badge-pill"
        to="/destinations"
        style={link}
        activeStyle={{ background: 'black', color: 'white' }}
      >
        Destinations
      </NavLink>{' '}
      <NavLink
        className="btn badge-pill"
        to="/discussionboard"
        style={link}
        activeStyle={{ background: 'black', color: 'white' }}
      >
        Discussion Board
      </NavLink>{' '}
      <NavLink
        className="btn badge-pill"
        to="/votingpolls"
        style={link}
        activeStyle={{ background: 'black', color: 'white' }}
      >
        Voting Polls
      </NavLink>
    </div>
  );
};

export default navbar;
