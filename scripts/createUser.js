const bcrypt = require("bcryptjs");
const saltRounds = 10;
const {User} = require('../models')
// const mongoose = require('mongoose');

const createUser =  (user,cb) => {
	bcrypt.hash(user.password, saltRounds, (err, hash) => {
		if (!err) {
			let u = new User({
				userName: user.userName.toLowerCase().trim(),
				firstName: user.firstName.toLowerCase(),
				lastName: user.lastName.toLowerCase(),
				dob: user.dob,
				email: user.email,
				password: hash,
				userType: user.userType,
				profile: user.profile
			});
			u.save((err) => {
				if (err) {
					console.error(`Could not create user error: ${err}`);
					cb(err)
				} else {
					let mes = "User saved!";
					cb(mes)
				}
			});
		} else {
			console.error(`Could not hash password error: ${err}`)
		}
	});
}

module.exports = createUser;