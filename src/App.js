import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/home";
import Login from "./component/login";
import Signup from "./component/signup";
import Courses from "./component/courses";
import Contact from "./component/contact";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
