const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  userName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  dateCreated: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  userType: { 
    type: String, 
    enum: ["Client", "Doctor"], 
    required: "User should be eigtherDoctor or a Client." 
  },
  image: {
    type: String, default: "../client/public/user.svg"
  }
});

const User = mongoose.model("User", user);
module.exports = User;