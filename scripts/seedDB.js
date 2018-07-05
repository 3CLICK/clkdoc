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
    userType: "Doctor",
  },
  {
    userName: "rayala",
    firstName: "Robert",
    lastName: "Ayala",
    dob: new Date("05/11/1984"),
    email: "rayala@gmail.com",
    dateCreated: Date.now,
    userType: "Client"
  },
  {
    userName: "mvasquez",
    firstName: "Melvin",
    lastName: "Vasquez",
    dob: new Date("10/26/1989"),
    email: "mvasquez@gmail.com",
    password: "1234",
    userType: "Doctor"
  },
  {
    "userName": "jbarroso",
    "firstName": "Jany",
    "lastName": "Barroso",
    "dob": "1986-10-26T05:00:00.000Z",
    "email": "janyb86@gmail.com",
    "password": "123456",
    "userType": "Client"
  }
];

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
