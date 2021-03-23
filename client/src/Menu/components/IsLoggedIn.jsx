import React from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Shop from "../Shop";
export default function IsLoggedIn(props) {
  console.log("isLoggedIn Trigared");
  if (props.guest && props.from === "/signin") {
    return (
      <>
        <SignIn
          handleSignIn={props.handleSignIn}
          guest={props.guest}
          userData={props.userData}
          inputEvent={props.inputEvent}
        />
      </>
    );
  } else if (props.guest && props.from === "/signup") {
    return (
      <SignUp
        from="/signup"
        handleSubmit={props.handleSubmit}
        guest={props.guest}
        userData={props.userData}
        inputEvent={props.inputEvent}
      />
    );
  } else {
    return <Shop />;
  }
}
