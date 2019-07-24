import React from 'react';
import { connect } from 'react-redux'

const likes = (props) => {
    console.log(props.likes)
    return <button onClick={props.likesCounter}>Likes: {props.likes}</button>
}

export default likes