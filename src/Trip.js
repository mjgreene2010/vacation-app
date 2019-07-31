import React from 'react';
import Likes from './Likes';
import { Link } from "react-router-dom"



const trip = props => {

    console.log(props)

    return <div>
        Name: <input className={props.addName}></input>{' '}
        <button onClick={props.addName} > Enter </button>

        {props.tripName.map(name => {
            console.log(name)
            return <ol>
                <Link to={name} >
                    {name}{' '}
                    <Likes />
                </Link>
            </ol>

        })}

    </div>
}

export default trip