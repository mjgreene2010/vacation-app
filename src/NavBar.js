import React from 'react'
import { NavLink } from "react-router-dom";


const navbar = props => {

    const link = {
        width: "medium",
        color: "black",
        display: "inline-block",
        textDecoration: "none",
        margin: "25px",
        border: "solid 3px",
        marginTop: "1px",
        borderRadius: "15px",
        padding: "5px"
    };

    return <div>

        <NavLink style={link}> Home </NavLink>
        {' '}
        <NavLink style={link}> Destinations </NavLink>
        {' '}
        <NavLink style={link}> Discussion Board </NavLink>
        {' '}
        <NavLink style={link}> Voting Polls </NavLink>
    </div>

}

export default navbar