import React from "react";
import Common from "./components/Common";
import web from "../assets/img/logo.png";

const Home = () => {
  return (
    <>
      <Common
        name="Welcome"
        imgsrc={web}
        visit="/shop"
        btnName="Start Shopping"
      />
    </>
  );
};

export default Home;
