const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {

});
app.post("/login", async (req, res) => {
  const { email,password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    return res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (error) {
    return res.json("not exist");
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is connected on port", PORT);
});
