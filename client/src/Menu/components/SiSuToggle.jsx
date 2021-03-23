import React from "react";

import { NavLink } from "react-router-dom";

const SiSuToggle = (props) => {
  //console.log("nav-guest", props.guest);

  if (props.guest) {
    return (
      <React.Fragment>
        <li className="nav-item"></li>
        <li className="nav-item">
          <NavLink
            exact={true}
            activeClassName="active-menu"
            className="nav-link"
            to="/signin"
          >
            Sign in
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact={true}
            activeClassName="active-menu"
            className="nav-link"
            to="/signup"
          >
            Sign Up
          </NavLink>
        </li>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <li className="nav-item dropdown">
          <NavLink
            className="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.userData.firstName}
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <NavLink
                className="dropdown-item"
                to={`/${props.userData.firstName}`}
              >
                {" "}
                View Profile{" "}
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className="dropdown-item"
                to={`/${props.userData.firstName}/edit`}
              >
                Edit Profile
              </NavLink>
            </li> */}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink
                onClick={props.handleLogOut}
                className="dropdown-item"
                to="/"
              >
                Log out
              </NavLink>
            </li>
          </ul>
        </li>
      </>
    );
  }
};

export default SiSuToggle;
