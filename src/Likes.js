import React from 'react';
import { connect } from 'react-redux'

const likes = (props) => {
    console.log(props)
    return <button onClick={props.likesCounter}>Likes: {props.likesCount}</button>
}

export default likes