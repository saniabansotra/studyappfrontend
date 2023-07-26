import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [newtweets, setnewtweets] = useState([]);
  const [name, setname] = useState("");
  const [tweets, settweet] = useState("");
  const [newdate, setdate] = useState([new Date()]);

  const addtweet = () => {
    const oldtweet = [...newtweets];
    const add = {
      TweetName: name,
      TweetDate: newdate,
      newtweet: tweets,
    };
    oldtweet.push(add);
    setnewtweets(oldtweet);
  };
  const edittweet = (i) => {
    const oldtweet = [...newtweets];
    oldtweet[i].TweetName = name;
    oldtweet[i].TweetDate = newdate;
    // oldtweet[i].newTweet = tweet;
    setnewtweets(oldtweet);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>
        Hello {location.state.id} and welcome to the home
      </h1>
      <div
        className="homepage"
        style={{ backgroundColor: "cornsilk" }}
        id="main"
      >
        <div class="input">
          <label>Date: </label>
          <input
            type="Date"
            value={newdate}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <br />

        <div class="input">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <br />
        <div class="input">
          <label>Write Tweet : </label>
          <textarea
            type="text"
            value={tweets}
            onChange={(e) => settweet(e.target.value)}
          />
        </div>

        <button onClick={() => addtweet()}>Add Tweet</button>
      </div>

      {newtweets.map((v, i) => {
        return (
          <>
            <div key={i}>
              <ul>
                <li> Date: {v.TweetDate}</li>
                <li> Name: {v.TweetName}</li>
                <li>New Tweet: {v.newtweet}</li>
              </ul>
              <button type="button" onClick={() => edittweet(i)}>
                Edit
              </button>
              <button
                type="button"
                onClick={() =>
                  setnewtweets((oldtweets) =>
                    oldtweets.filter((v, index) => index !== i)
                  )
                }
              >
                Delete
              </button>
            </div>
          </>
        );
      })}
    </>
  );

  /* <input type="text" x-webkit-speech></input> */
};

export default Home;
