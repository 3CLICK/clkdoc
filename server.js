const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
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

// Getting Mongoose connected to the database
const prodURL = process.env.MONGODB_URI
const devURL = "mongodb://localhost:27017/clkdoc";
mongoose.connect((prodURL || devURL),
  { useNewUrlParser: true, keepAlive:true},
  (err, database) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Connected to: ${database.name}`);
    }
  });
app.use(session({
  secret: "1234abcd5678ef",
  resave: false,
  rolling: true,
  cookie: {maxAge: 900000},
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  saveUninitialized: true
}));

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT}`);
});

//hello tres clicks