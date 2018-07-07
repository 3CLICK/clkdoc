const express = require("express");
// const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Getting Mongoose connected to the database
const prodURL = process.env.MONGODB_URI
const devURL = "mongodb://localhost:27017/clkdoc";
mongoose.connect((prodURL || devURL),
  { useNewUrlParser: true, keepAlive:true},
  (err, database) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Connected to MongoDB.")
    }
  });

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT}`);
});

//hello tres clicks