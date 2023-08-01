import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import feed from "./fee.png";
import FeedbackIcon from "@mui/icons-material/Feedback";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const Feedback = () => {
  const [name, setname] = useState("");
  const [feedback, setfeedback] = useState("");

  const Submit = async () => {
    if (name.trim() === "" || feedback.trim() === "") {
      return toast.warning("Please Enter the  details");
    }
    toast.success("Thanks for your Feedback");
    setname("");
    setfeedback("");
    const response = await axios.post("/api/addfeedback", {
      name,
      feedback,
    });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <h1
        style={{ textShadow: "2px 2px purple", color: "green" }}
        class="headingtext"
      >
        Feedback
        <img src={feed} class="image2" alt="Logo" />
      </h1>
      <div className="mainfeedback">
        <div>
          <label style={{ textShadow: "2px 2px purple" }}>Name: </label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label style={{ textShadow: "2px 2px purple" }}>Feedback: </label>
          <br />
          <textarea
            type="text"
            rows="4"
            cols="35"
            value={feedback}
            onChange={(e) => setfeedback(e.target.value)}
          />
        </div>
        <br />
        <button class="button1" onClick={() => Submit()}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};
export default Feedback;
