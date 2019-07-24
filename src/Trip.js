import React from 'react';

const trip = props => {

    console.log(props.tripName)

    return <div>
        Name: <input onChange={props.addName}></input>{' '}
        <button> Enter </button>
    </div>
}

export default trip