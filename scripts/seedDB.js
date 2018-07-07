const mongoose = require("mongoose");
const {User} = require("../models");
// mongoose.Promise = global.Promise;

// Getting Mongoose connected to the database
const prodURL = process.env.MONGODB_URI
const devURL = "mongodb://localhost:27017/clkdoc";
mongoose.connect((prodURL || devURL), { useNewUrlParser: true },
  (err, database) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Connected to MongoDB.")
    }
  });

const users = [
  {
    userName: "ndiaz",
    firstName: "Nelson",
    lastName: "Diaz",
    dob: new Date("02/22/1986"),
    email: "abnerdc86@gmail.com",
    password: "123456",
    userType: "Client",
    profile: {
      ssn: 111222333,
      address: "7070 NW 179th ST Apt 205",
      city: "Hialeah",
      state: "FL",
      zipCode: 33012,
      phoneNumber: 3057444911,
      emergencyContact: {
        name: "Jany Barroso",
        phone: 7868999887
      },
      insurance: "PPO",
      allergies: ["Ibuprofen"],
      reason_for_visit: "Flu"
    }
  },
  {
    userName: "rayala",
    firstName: "Robert",
    lastName: "Ayala",
    dob: new Date("05/11/1982"),
    email: "rayala@gmail.com",
    password: "ggjkdflkswerwy",
    userType: "Client",
    profile: {
      ssn: 111222444,
      address: "8705 SW 8th ST",
      city: "Miami",
      state: "FL",
      zipCode: 33050,
      phoneNumber: 3057852341,
      emergencyContact: {
        name: "Suegra",
        phone: 1234567890
      },
      insurance: "PPO",
      allergies: ["Green Tea"],
      reason_for_visit: "Flu"
    }
  },
  {
    userName: "mvasquez",
    firstName: "Melvin",
    lastName: "Vasquez",
    dob: new Date("02/18/1995"),
    email: "mvasquez@gmail.com",
    password: "ffdssdfsdf",
    userType: "Client",
    profile: {
      ssn: 111222555,
      address: "150 E 1st Ave",
      city: "Hialeah",
      state: "FL",
      zipCode: 33010,
      phoneNumber: 3456217675,
      emergencyContact: {
        name: "Brother",
        phone: 9087654321
      },
      insurance: "HMO",
      allergies: ["Tylenol"],
      reason_for_visit: "fever"
    }
  },
  {
    userName: "rbarrial",
    firstName: "Rafael",
    lastName: "Barrial",
    dob: new Date("05/18/1976"),
    email: "rbarrial@gmail.com",
    password: "123456",
    userType: "Doctor",
    profile: {
      ssn: 111222666,
      specialty: "Internal Medicine",
      address: "1611 NW 12th Ave",
      city: "Miami",
      state: "FL",
      zipCode: 33136,
      phoneNumber: "3055855150",
      insurance: "PPO",
      images: "https://asset3.betterdoctor.com/assets/general_doctor_male.png"
    }
  },
  {
    userName: "Kurt",
    firstName: "Kurt",
    lastName: "Friedman",
    dob: new Date("10/12/1965"),
    email: "kfriedman@gmail.com",
    password: "123456",
    userType: "Doctor",
    profile: {
      ssn: 111222777,
      specialty: "Oral & Maxillofacial Surgery",
      address: "1201 NW 16th St",
      city: "Miami",
      state: "FL",
      zipCode: 33125,
      phoneNumber: "3055757000",
      insurance: "PPO",
      images: "https://asset3.betterdoctor.com/assets/general_doctor_male.png"
    }
  },
  {
    userName: "jgutman",
    firstName: "Joseph",
    lastName: "Gutman",
    dob: new Date("01/19/1980"),
    email: "jgutman@gmail.com",
    password: "123456",
    userType: "Doctor",
    profile: {
      ssn: 111222888,
      specialty: "Endocrinology",
      address: "9380 SW 150th St",
      city: "Miami",
      state: "FL",
      zipCode: 33176,
      phoneNumber: "3052532665",
      insurance: "PPO",
      images: "https://asset3.betterdoctor.com/assets/general_doctor_male.png"
    }
  }
];
const populateUsers = (userList) => {
  users.forEach(user => {
    User.create(user)
    .then(data => {
      console.log("User Succesfully Added!");
    })
    .catch(err => {
      console.error(err);
    });
  });
}

User
  .remove({})
  .then(() => populateUsers(users));


// console.log(JSON.stringify(users, '', 2));
