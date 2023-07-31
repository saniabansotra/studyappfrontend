import React from "react";
import logo1 from "./logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src={logo1}
              class="image1"
              width="100px"
              height="60vh"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                class="button3"
                style={{
                  backgroundColor: "green",
                  marginRight: "3%",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 20px white",
                }}
                className="nav-link active "
                aria-current="page"
                to="/home"
              >
                HOME
              </Link>
              <Link
                style={{
                  backgroundColor: "green",
                  marginRight: "3%",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 20px white",
                }}
                class="button3"
                className="nav-link active "
                aria-current="page"
                to="/courses"
              >
                COURSES
              </Link>
              <Link
                style={{
                  backgroundColor: "green",
                  marginRight: "3%",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 20px white",
                }}
                class="button3"
                className="nav-link active "
                aria-current="page"
                to="/contact"
              >
                REGISTER
              </Link>
              <Link
                style={{
                  backgroundColor: "green",
                  marginRight: "3%",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 20px white",
                }}
                class="button3"
                className="nav-link active "
                aria-current="page"
                to="/feedback"
              >
                FeedBack
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
