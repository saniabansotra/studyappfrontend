import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "./logo.jpg";
const Front = () => {
  const location = useLocation();
  return (
    <>
      <img src={logo1} class="image1" width="100px" height="60vh" alt="Logo" />
      <div>
        <h2 style={{ color: "white" }}>
          <marquee scrollamount="20">
            {" "}
            Hello <span style={{ color: "purple" }}>
              {location.state.id}{" "}
            </span>{" "}
            and Welcome to Learing...{" "}
          </marquee>
        </h2>
        <h1 id="front1">CAVE OF PROGRAMMING</h1>
        <h3 id="front2">Learn to Program</h3>
        <h5 class="para">
          Whether you want to learn how to program from scratch or you want to
          improve your existing skills, you'll find a course here that can help
          you.
        </h5>
        <br />
        <h5 class="para">
          Learn Web Development, Java or C++ build websites with the popular
          java spring framework or core Java technologies, discover MongoDB.
          Also java desktop programming with Swing
        </h5>
        <h2 class="happy">Happy Coding</h2>
      </div>
      <div class="btn-text-center">
        <Link to="/home" id="frontbutton" class="btn btn-primary">
          Click to learn
        </Link>
      </div>
    </>
  );
};
export default Front;
