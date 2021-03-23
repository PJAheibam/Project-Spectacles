import React from "react";
import Developer from "./components/Developer";
import PJ from "../assets/img/prosenjit.jpg";
import Samy from "../assets/img/samy.jpg";

const Contact = () => {
  const pj = {
    name: "Prosenjit Singha",
    role: "Front-end Developer",
    id: "181 - 115 - 052",
    email: "prosenjitsingha28@gmail.com",
    mobileNumber: "+88 017-63943389",
    imgsrc: PJ,
    alter: "Prosenjit",
  };
  const sammy = {
    name: "Mahmudur Rahman Samy",
    role: "Back-end Developer",
    id: "181 - 115 - 073",
    email: "mrahmansamy28@gmail.com",
    mobileNumber: "+88 017-98243798",
    imgsrc: Samy,
    alter: "Samy",
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-4 ms-auto">
            <Developer devDetails={pj} />
          </div>
          <div className="col-md-12 col-lg-4 me-auto">
            <Developer devDetails={sammy} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
