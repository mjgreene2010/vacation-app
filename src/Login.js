import React from "react";

const login = props => {

  return (
    <div>

      <div>
        <label>Username:</label>
        <input username={props.username}
          className="username"
          type="text"
          onChange={props.loginHandler} />
      </div>

      <div>
        <label>Password:</label>
        <input username={props.password}
          className="password"
          type="password"
          onChange={props.loginHandler} />
      </div>

      <button>Enter</button>

    </div>
  );
};

export default login;
