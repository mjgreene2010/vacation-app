import React from 'react';

const login = props => {
  return (
    <div className="container-fluid">
      <form>
        <div className="form-group row justify-content-center">
          <label htmlFor="userName" className="col-form-label col-sm-2">
            Username:
          </label>
          <input
            username={props.username}
            className="form-control col-sm-3"
            id="username"
            type="text"
            onChange={props.loginHandler}
          />
        </div>

        <div className="form-group row justify-content-center">
          <label htmlFor="password" className="col-form-label col-sm-2">
            Password:
          </label>
          <input
            username={props.password}
            className="form-control col-sm-3"
            id="password"
            type="password"
            onChange={props.loginHandler}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default login;
