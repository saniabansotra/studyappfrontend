const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/react-login-tut")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  newdate: {
    type: Date,
    required: true,
  },
  tweets: {
    type: String,
    required: true,
  },
});

const twitteruser = mongoose.model("twitteruser", userSchema);
module.exports = collection;
module.exports = twitteruser;
