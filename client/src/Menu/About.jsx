import React from "react";
import Common from "./components/Common";
import web from "../assets/img/logo.png";

const About = () => {
  return (
    <>
      <Common name="About" imgsrc={web} visit="/contact" btnName="Contact Us" />
    </>
  );
};

export default About;
