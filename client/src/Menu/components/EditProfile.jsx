import React from "react";
import { Link } from "react-router-dom";

const EditProfile = (props) => {
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Edit Profile</h1>
      </div>
      <div className="container contact-div mt-4">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="row g-3">
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  //disabled={disable}
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
                  required
                  //disabled={disable}
                />
              </div>
              <div className=" row mt-4 row justify-content-start">
                <div className="col-6">
                  <button
                    onClick={props.handleUpdate}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </div>
                <div className="col-6">
                  <Link
                    to={`/${props.userData.firstName}`}
                    type="submit"
                    className="btn btn-primary mx-2"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
