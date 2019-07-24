import React from 'react';

const trip = props => {

    console.log(props.addName)

    return <div>
        Name: <input onChange={props.addName}></input>{' '}
        <button onClick={props.addName} > Enter </button>

        {props.tripName.map(name => {
            return <div>
                <ol>
                    {name}
                </ol>
            </div>
        })}

    </div>
}

export default trip