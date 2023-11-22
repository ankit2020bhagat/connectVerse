import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ConnectVerse</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on ConnectVerse.{" "}
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="text" className="loginInput" />
            <input placeholder="Password" type="text" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot"> Forgot Password ?</span>
            <button className="loginRegisterButton">
              Create a New account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
