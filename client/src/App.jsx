import React from "react";
import Home from "./component/Page/Home/Home";
import Profile from "./component/Page/profile/Profile";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
