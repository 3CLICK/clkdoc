const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/clkdoc"
);

const users = [
  {
    userName: "ndiaz",
    firstName: "Nelson",
    lastName: "Diaz",
    dob: new Date("02/22/1986"),
    email: "abnerdc86@gmail.com",
    password: "123456",
    lastLogin: Date.now,
    userType: "Doctor"
  },
  {
    userName: "rayala",
    firstName: "Robert",
    lastName: "Ayala",
    dob: new Date("05/11/1984"),
    email: "rayala@gmail.com",
    password: "123",
    lastLogin: Date.now,
    userType: "Client"
  },
  {
    userName: "mvasquez",
    firstName: "Melvin",
    lastName: "Vasquez",
    dob: new Date("10/26/1989"),
    email: "mvasquez@gmail.com",
    password: "1234",
    lastLogin: Date.now,
    userType: "Doctor"
  }
];

// const doctors =[
//   {
//     _docID: ,
//     firstName: "Rafael",
//     lastName: "Barrial",
//     specialty: "Internal Medicine",
//     address: "1611 NW 12th Ave",
//     city: "Miami",
//     state: "FL",
//     zipCode: 33136,
//     phoneNumber: "3055855150",
//     insurance: "PPO",
//     images: "https://asset3.betterdoctor.com/assets/general_doctor_male.png"
//   },
//   {
//     _docID: ,
//     firstName: "Kurt",
//     lastName: "Friedman",
//     specialty: "Oral & Maxillofacial Surgery",
//     address: "1201 NW 16th St",
//     city: "Miami",
//     state: "FL",
//     zipCode: 33125,
//     phoneNumber: "3055757000",
//     insurance: "PPO",
//     images: "https://asset3.betterdoctor.com/assets/general_doctor_male.png"
//   },
//   {
//     _docID: ,
//     firstName: "Joseph",
//     lastName: "Gutman",
//     specialty: "Endocrinology",
//     address: "9380 SW 150th St",
//     city: "Miami",
//     state: "FL",
//     zipCode: 33176,
//     phoneNumber: "3052532665",
//     insurance: "PPO",
//     images: "https://asset3.betterdoctor.com/assets/general_doctor_male.png"
//   }
// ];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(users))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
