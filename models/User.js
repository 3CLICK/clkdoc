const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  Profile = require('./Profile');

const user = new Schema({
  userName: { 
    type: String,
    required: "UserName is required",
    unique: true
  },
  firstName: {
    type: String, 
    required: "First Name is required" 
  },
  lastName: {
    type: String, 
    required: "Last name is required" 
  },
  dob: { 
    type: Date, 
    required: "Date of birth ir required." 
  },
  email: {
    type: String, 
    required: "Email is required", 
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: { 
    type: String,
    required: "Password is required",
    trim: true,
    minlength: 6 },
  dateCreated: {
    type: Date, 
    required: true,
    default: Date.now 
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now 
  },
  userType: { 
    type: String, 
    required: "You must shoose either Doctor or Client",
    enum: ["Client", "Doctor"]
  },
  image: {
    type: String, 
    default: "../client/public/user.svg"
  },
  // appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  profile: Profile
});

const User = mongoose.model("User", user);
module.exports = User;