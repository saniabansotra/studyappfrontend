import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/home";
import Login from "./component/login";
import Signup from "./component/signup";
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
      <Navbar />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
