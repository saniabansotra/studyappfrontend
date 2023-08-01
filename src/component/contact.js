import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import logo1 from "./logo.jpg";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import FeedbackIcon from "@mui/icons-material/Feedback";
// import { useEffect } from "react";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const Home = () => {
  const location = useLocation();
  const [newtweets, setnewtweets] = useState([]);
  const [name, setname] = useState("");
  const [tweets, settweet] = useState("");
  const [newdate, setdate] = useState([new Date()]);
  const [description, setdescription] = useState("");
  const [phone, setphone] = useState("");

  //   const [likedtweet, setliked] = useState("");

  //   const gettweet = async () => {
  //     const response = await axios.get("/api/getuser");
  //     if (response.data.success) {
  //       setnewtweets(response.data.data);
  //     } else {
  //       toast.error("Something went wrong");
  //     }
  //   };
  const addtweet = async () => {
    if (
      name.trim() === "" ||
      tweets.trim() === "" ||
      newdate.trim() === "" ||
      phone.trim() === "" ||
      description.trim() === ""
    ) {
      return toast.error("please provide full details");
    }
    // gettweet();
    toast.success("Thanks. You have Registered Successfully ");
    setname("");
    settweet("");
    setdate(new Date());
    setphone("");
    setdescription("");

    /// api for sending data to backend
    const response = await axios.post("/api/addtweet", {
      name,
      newdate,
      tweets,
      description,
      phone,
    });
    // gettweet();
    // console.log(response);
  };
  //   const handleDelete = async (tweetid) => {
  //     const response = await axios.delete(`/api/deletetask/${tweetid}`);
  //     if (response.data.success) {
  //       gettweet();
  //       toast.success("Task deleted");
  //     } else {
  //       toast.error("Something went wrong");
  //     }
  //   };
  //   const like = (i) => {};
  // const edittweet = async (i) => {
  //   const oldtweets = [...newtweets];
  //   oldtweets[i].newtweet = (
  //     <textarea
  //       type="text"
  //       value={updatedtweet}
  //       onChange={(e) => setupdated(e.target.value)}
  //     />
  //   );
  //   // settweet(oldtweets[i].newtweet);
  //   setnewtweets(oldtweets);
  //   // const response = await axios.post("/api/update");
  //   // {
  //   //   newtweet: updatedtweet;
  //   // }
  // };
  // const saveedit = (event) => {
  //   setEditedText(event.target.value);
  // };

  //   useEffect(() => {
  //     gettweet();
  //   }, []);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <nav>
        {/* <img src={logo1} class="image1" width="100px" alt="Logo" /> */}

        <h1
          style={{
            color: "green",
            marginTop: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "2px 2px purple",
            color: "green",
          }}
        >
          REGISTRATION
          <FeedbackIcon />
        </h1>
      </nav>

      <div id="maininput" style={{ paddingRight: "10%" }}>
        <div
          className="homepage"
          // style={{ backgroundColor: "cornsilk" }}
          id="main1"
        >
          <div class="input">
            <label style={{ textShadow: "2px 2px purple" }}>
              <b>Date: </b>
            </label>
            <input
              type="Date"
              value={newdate}
              onChange={(e) => setdate(e.target.value)}
            />
          </div>
          <br />

          <div class="input">
            <label style={{ textShadow: "2px 2px purple" }}>
              <b> Name: </b>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <br />
          <div class="input">
            <label style={{ textShadow: "2px 2px purple" }}>
              <b>Email : </b>
            </label>
            <input
              type="email"
              value={tweets}
              onChange={(e) => settweet(e.target.value)}
            />
          </div>

          <br />
          <div class="input">
            <label style={{ textShadow: "2px 2px purple" }}>
              <b>Phone No. : </b>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <br />
          <div class="input">
            <label style={{ textShadow: "2px 2px purple" }}>
              <b>Course: </b>
            </label>
            {/* <input
              type="dropdown"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            /> */}
            <select
              name="course"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            >
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="Python">Python</option>
            </select>
          </div>

          <button class="button1" onClick={() => addtweet()}>
            REGISTER
          </button>
        </div>
      </div>
      <div id="list">
        {newtweets.map((v, i) => {
          return (
            <>
              <div key={i} id="listdata">
                <ul>
                  <li> Date: {v.TweetDate}</li>
                  <li> Name: {v.TweetName}</li>
                  <li>Email: {v.newtweet}</li>
                  <li>Phone No: {v.phone}</li>
                  <li>Description: {v.description}</li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );

  /* <input type="text" x-webkit-speech></input> */
};

export default Home;
