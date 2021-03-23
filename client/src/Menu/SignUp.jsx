import { NavLink } from "react-router-dom";

const SignUp = (props) => {
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Sign Up</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={props.handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={props.userData.firstName}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={props.userData.lastName}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={props.userData.email}
                  onChange={props.inputEvent}
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div className="col-md-6">
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
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  name="address"
                  value={props.userData.address}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  name="address2"
                  value={props.userData.address2}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCountry" className="form-label">
                  Country
                </label>
                <input
                  name="country"
                  value={props.userData.country}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="inputCountry"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  name="city"
                  value={props.userData.city}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="inputCity"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <input
                  name="state"
                  value={props.userData.state}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="inputState"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  name="zip"
                  value={props.userData.zip}
                  onChange={props.inputEvent}
                  type="text"
                  className="form-control"
                  id="inputZip"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I have read the terms and conditions.
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="gridCheck">
                    <i>Already have an account?</i>
                  </label>
                  <NavLink
                    to="/signin"
                    exact={true}
                    style={{
                      paddingLeft: "0.5rem",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <i>Sign in here</i>
                  </NavLink>
                </div>
              </div>
              <div className="col-12">
                {/* <Link to="/" type="submit" className="btn btn-primary">
                  Sign Up
                </Link> */}
                <button
                  //onClick={props.handleSignUp}
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
