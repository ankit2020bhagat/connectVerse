import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Page/Signup";
import Login from "./component/Page/Login";
import "./App.css";
import Home from "./component/Page/Home";
const App = () => {
  return (
    <div className="App">
      <h1>Connect_Verse</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  Signup;
};

export default App;
