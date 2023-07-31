import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo1 from "./logo.jpg";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/front", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div className="login" class="form">
        <h1
          style={{
            color: "rgb(53, 249, 49)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          SIGN IN
        </h1>

        <form action="POST">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <br />
          <div class="btn-text-center">
            <input
              class="button1"
              type="submit"
              value="SIGN IN"
              onClick={submit}
            />
          </div>
        </form>

        <br />
        <p
          style={{
            color: "rgb(53, 249, 49)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          OR
        </p>
        <br />

        <Link
          to="/"
          style={{
            color: "rgb(53, 249, 49)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Login Page
        </Link>
      </div>
    </div>
  );
}

export default Login;
