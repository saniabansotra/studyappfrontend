const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/frontend")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("failed");
  });
// module.exports = { connectDatabase };

const login_schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const collection = mongoose.model("collection", login_schema);
module.exports = collection;
