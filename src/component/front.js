import React from "react";
import { Link } from "react-router-dom";
const Front = () => {
  return (
    <>
      <div>
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
