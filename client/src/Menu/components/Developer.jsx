import React from "react";

//import { Facebook, Envelope } from "react-bootstrap-icons";
export default function Developer(props) {
  const {
    name,
    role,
    id,
    email,
    mobileNumber,
    imgsrc,
    alter,
  } = props.devDetails;

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="card py-4 mb-5 row ">
          <div className="text-center col-12">
            {" "}
            <img
              src={imgsrc}
              width="100"
              className="rounded-circle"
              alt={alter}
            />
            <h3 className="mt-2">{name}</h3>{" "}
            <span className="mt-1 clearfix">{role}</span>{" "}
          </div>
          <div className="col-6 mt-2 d-flex flex-column">
            <h6 className="fs-5">Department</h6>
            <small>CSE</small>
          </div>
          <div className=" col-6 mt-2 d-flex flex-column">
            <h6>ID</h6>
            {id}
          </div>
          <div className="mt-2">
            <h6>Batch</h6>
            <small>44</small>
          </div>
          <div className="mt-2">
            <h6>Section</h6>
            <small>B</small>
          </div>
          <div className="mt-2">
            <h6>Email</h6>
            {email}
          </div>
          <div className="mt-2">
            <h6>Mobile Number</h6>
            {mobileNumber}
          </div>
        </div>
      </div>
    </div>
  );
}
