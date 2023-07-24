import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function submit(e) {
    e.preventdefault();
    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            // history("/home",{state:{id:email}});
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="signup">
        <h1>SignUP</h1>
        <form action="POST">
          <label>Enter your email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label>Enter your password here</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" onClick={() => submit()} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/">Login Page</Link>
      </div>
    </>
  );
};
export default Signup;
