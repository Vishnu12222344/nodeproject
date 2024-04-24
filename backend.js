const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/furniture")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

const UserDetails = mongoose.model("User", userSchema);

module.exports = UserDetails;
