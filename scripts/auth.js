const bcrypt = require("bcryptjs");
const User = require('../models/User')
const mongoose = require('mongoose');

var auth = function (req, res, next) {
	let userSession = req.session;
	const prodURL = process.env.MONGODB_URI
	const devURL = "mongodb://localhost:27017/clkdoc";
	mongoose.connect((prodURL || devURL),
		{ useNewUrlParser: true, keepAlive: true },
		(err, database) => {
			if (err) {
				console.log(err)
			}
		else {
			console.log(`Connected to: ${database.name}`);
			User.findOne({ 'userName': req.body.username.toLowerCase().trim() }, function (err, user) {
				if (err) {
					next(false) //Login failed strange error 
				};
				if (user !== null) {
					if (bcrypt.compareSync(req.body.password, user.password)) {
						userSession.username = user.userName;
						userSession.firstname = user.firstName
						userSession.lastname = user.lastName
						mongoose.disconnect();
						next(true);
					}
					else {
						next(false) //Login failed! Bad Password
					};
				} else {
					next(false) //Login failed! Bad Username
				}
			});
		}
	});
}



module.exports = auth;