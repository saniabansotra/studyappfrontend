const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const user = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });
    const checkpassword = await collection.findOne({ password: password });

    if (check && checkpassword) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
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
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});
app.get("/api/getuser", async (req, res) => {
  try {
    const data = await user.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

app.post("/api/addtweet", async (req, res) => {
  try {
    const newtweet = {
      name: req.body.name,
      newdate: req.body.newdate,
      tweets: req.body.tweets,
    };
    const tweet = new user(newtweet);
    await tweet.save();
    return res.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.delete("/api/deletetask/:id", async (req, res) => {
  try {
    const delete_task = await user.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.listen(8000, () => {
  console.log("port connected");
});
