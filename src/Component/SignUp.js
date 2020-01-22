import React from 'react';

const signup = props => {
  return (
    <div className="container-fluid">
      <form className="signup" id="signup">
        <div className="form-group row justify-content-sm-center">
          <label htmlFor="userName" className="col-form-label col-sm-2">
            Username:
          </label>
          <input type="text" className="form-control col-sm-3" id="username" />
        </div>

        <div className="form-group row justify-content-sm-center">
          <label htmlFor="password" className="col-form-label col-sm-2">
            Password:
          </label>
          <input
            type="password"
            className="form-control col-sm-3"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default signup;
