import React from "react";
import { Link, NavLink } from "react-router-dom";
import SiSuToggle from "./components/SiSuToggle";
import Cart from "../assets/img/cart.png";
import "../index.css";

const Navbar = (props) => {
  //console.log("Nav", props.cart);
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink exact={true} className="navbar-brand" to="/">
            {/* <img
                    src={Logo}
                    alt="Spactacles"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  /> */}
            Spectacles
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact={true}
                  activeClassName="active-menu"
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact={true}
                  activeClassName="active-menu"
                  className="nav-link"
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact={true}
                  activeClassName="active-menu"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact={true}
                  activeClassName="active-menu"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <SiSuToggle
                handleLogIn={props.handleLogIn}
                handleLogOut={props.handleLogOut}
                guest={props.guest}
                userData={props.userData}
              />
              <div>
                <Link to="/shop/cart">
                  <img className="ms-2" src={Cart} width="40" alt="cart" />
                </Link>
                <span className="ms-1 badge rounded-pill bg-info fs-6">
                  {props.cart}
                </span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
