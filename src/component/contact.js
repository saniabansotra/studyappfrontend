import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo1 from "./logo.jpg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
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
    if (name.trim() === "" || tweets.trim() === "" || newdate.trim() === "") {
      return toast.error("please provide full details");
    }
    // gettweet();
    toast.success(
      "Thanks" + location.state.id + ". We have received your message "
    );
    setname("");
    settweet("");
    setdate(new Date());
    /// api for sending data to backend
    const response = await axios.post("/api/addtweet", {
      name,
      newdate,
      tweets,
      description,
      phone,
    });
    // gettweet();
    console.log(response);
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
      <nav>
        <img src={logo1} class="image1" width="100px" alt="Logo" />

        <h1 style={{ color: "green", marginTop: "0" }}>
          <marquee scrollamount="20">
            Hello <span style={{ color: "purple" }}>{location.state.id} </span>
            and welcome to our Chatter
          </marquee>
        </h1>
      </nav>

      <div id="maininput">
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
              <b>Description : </b>
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <br />
          <div class="input">
            <label style={{ textShadow: "2px 2px purple" }}>
              <b>Phone No. : </b>
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>

          <button class="button1" onClick={() => addtweet()}>
            Add Tweet
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
                {/* <button type="button" onClick={() => edittweet(i)}>
                  Edit
                </button> */}
                {/* <button
                  type="button"
                  class="button1"
                  style={{ marginRight: "2%", padding: "7px" }}
                  onClick={() =>
                    // setnewtweets((oldtweets) =>
                    //   oldtweets.filter((v, index) => index !== i)
                    // )
                    handleDelete(v._id)
                  }
                > */}
                {/* <DeleteForeverIcon />
                </button> */}
                {/* <button
                  class="button1"
                  style={{ padding: "7px" }}
                  type="button"
                  onClick={() => like(i)}
                >
                  <FavoriteBorderIcon />
                </button> */}
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
