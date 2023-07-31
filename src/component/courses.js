import React from "react";
import web from "./webdevelopment.jpg";
import c from "./cplus.jpg";
import java from "./Java-Course.jpg";
import python from "./python.jpg";
import { Link } from "react-router-dom";
// import javaback from "./javaback.avif";
// import webback from "./webback.webp";
// import pythonback from "./pythonback.webp";

const Courses = () => {
  return (
    <>
      <h1
        class="coursetext"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Learn Creative Skills
      </h1>
      <br />
      <h4 class="coursetext" style={{ color: "white" }}>
        Explore thousands of tutorials, tips, tricks from leading industry
        experts. Totally free
      </h4>

      <h2 class="coursetext" style={{ color: "white", marginBottom: "4%" }}>
        {" "}
        Start Your learning Journey...
      </h2>

      <div class="coursemain">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={web}
            style={{ height: "50%" }}
            sclass="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">WEB DEVELOPMENT COURSE</h5>
            <p class="card-text">
              Web development, also known as website development, refers to the
              tasks associated with creating, building, and maintaining websites
              and web applications that run online on a browser
            </p>
            <Link to="/home" class="btn btn-primary">
              Click to learn
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={java}
            style={{ height: "50%" }}
            sclass="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">JAVA</h5>
            <p class="card-text">
              Our Java Course is coming soon. Click to register for the Java
              course.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Click to Register
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={c}
            style={{ height: "50%" }}
            sclass="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">C++</h5>
            <p class="card-text">
              Our C++ Course is coming soon. Click to register for the C++
              course.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Click to Register
            </Link>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={python}
            style={{ height: "50%" }}
            sclass="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">PYTHON</h5>
            <p class="card-text">
              Our Python Course is coming soon. Click to register for the PYTHON
              course.
            </p>
            <Link to="/contact" class="btn btn-primary">
              Click to Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;
