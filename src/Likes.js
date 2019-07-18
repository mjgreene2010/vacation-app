import React from 'react'

const likes = (props) => {
    console.log(props.likes)
    return <button onClick={props.likesCounter}>Likes: {props.likes}</button>
}

export default likes