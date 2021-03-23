import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Sign In</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="row g-3 form-login" onSubmit={props.handleSignIn}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  name="email"
                  value={props.userData.email}
                  onChange={props.inputEvent}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                  autoFocus
                />
              </div>
              <div className="col-md-12 col-12 mx-auto">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  value={props.userData.password}
                  onChange={props.inputEvent}
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  autoFocus
                />
              </div>
              <div className="col-12">
                <div
                  className="form-check"
                  style={{ paddingLeft: "0rem", paddingTop: "0.5rem" }}
                >
                  <label className="form-check-label" htmlFor="gridCheck">
                    <i>Don't have an account?</i>
                  </label>
                  <NavLink
                    to="/signup"
                    exact={true}
                    style={{
                      paddingLeft: "0.5rem",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <i>Sign up here</i>
                  </NavLink>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
