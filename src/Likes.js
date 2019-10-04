import React from 'react';
// import { connect } from 'react-redux';

const likes = props => {
  console.log(props);
  return (
    <button onClick={e => props.likesCounter(props.likes)}>
      Likes: {props.likes}
    </button>
  );
};

export default likes;
