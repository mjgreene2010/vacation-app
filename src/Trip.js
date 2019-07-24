import React from 'react';

const trip = props => {

    console.log(props.tripName)

    return props.tripName.map(name => {
        <div>

            <input onChange={props.addName}> </input>
        </div>

    })
}

export default trip