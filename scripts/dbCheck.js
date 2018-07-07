const mongoose = require("mongoose");
const { User, Client, Doctor } = require("../models");
const dbURL = "mongodb://localhost:27017/clkdoc";
mongoose.connect(dbURL, { useNewUrlParser: true },
	(err, database) => {
		if(err){
			console.log(err)
		}else {
			console.log("Connected to MongoDB.")
		}
	});

const getUsers = () => {
	User.find({})
		.then(data => console.log(JSON.stringify(data, "", 2)))
		.catch(err => console.log(err));
}

getUsers();
// test(Client);
// test(Doctor);

// process.exit(0);