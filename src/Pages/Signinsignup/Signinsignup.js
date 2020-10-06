import React from "react";

import Signin from "../../Components/Signin/Signin";
import Signup from "../../Components/Signup/Signup";

import "./Signinsignup.scss";

const Signinsignup = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default Signinsignup;
