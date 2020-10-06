import React, { Component } from "react";
import "./Signin.scss";
import Forminput from "../Forminput/Forminput";
import Custombutton from "../Custombutton/Custombutton";
import { auth, signInWithGoogle } from "../../firebase/firebase";

class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <Forminput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Custombutton type="submit"> Sign in</Custombutton>
            <Custombutton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              SigninwithGoogle
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}
export default Signin;
