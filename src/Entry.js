import React from 'react'
import { Link } from "react-router-dom"


const entry = props => {
    return <div style={{ textAlign: "right" }}>
        <Link to={"/login"}>
            Login
        </Link>
        {'   '}
        <Link to={"/signup"}>
            Sign Up
        </Link>
    </div>

}

export default entry

