import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Common = (props) => {
  const location = useLocation();

  const home =
    "Give your eyes a brand new look. Choose the best glasses without any hassle. Be spectacular with clearest sight.";
  const about =
    "Your eyewear doesn't always help you look clearly, it also upholds your personality and fashion sense. However, choosing a glass may be confusing and time consuming. Here, at 'Spectacles' you can have the best glasses and sun-glasses with a ew click in your computer/mobile. Protect your eyes with fashion.";
  return (
    <>
      <section
        id="header"
        className="h-100 d-flex align-items-center justify-content-center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className=" d-flex justify-content-center flex-column left-bg col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>{props.name}</h1>
                  {location.pathname === "/" ? (
                    <p className="my-3 fs-4">{home}</p>
                  ) : (
                    <p className="my-3 fs-5">{about}</p>
                  )}
                  <div className="mt-2">
                    <NavLink
                      className="btn btn btn-outline-success"
                      exact={true}
                      to={props.visit}
                    >
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="d-flex justify-content-evenly align-items-center right-bg col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Home page"
                    width="300"
                    height="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
