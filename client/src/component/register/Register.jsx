import React from "react";
import "./register.css";
const Register = () => {
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
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="text" className="loginInput" />
            <input placeholder="Password" type="text" className="loginInput" />
            <input
              placeholder="Confirm Password"
              type="text"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
