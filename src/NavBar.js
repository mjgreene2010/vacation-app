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

        <NavLink to="/" style={link} activeStyle={{
            background: "black", color: "white"
        }}> Home </NavLink>
        {' '}
        <NavLink to="/destinations" style={link} activeStyle={{
            background: "black", color: "white"
        }}> Destinations </NavLink>
        {' '}
        <NavLink to="/discussionboard" style={link} activeStyle={{
            background: "black", color: "white"
        }}> Discussion Board </NavLink>
        {' '}
        <NavLink to="/votingpolls" style={link} activeStyle={{
            background: "black", color: "white"
        }}> Voting Polls </NavLink>

    </div>

}

export default navbar