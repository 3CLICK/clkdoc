const bcrypt = require("bcrypt");
const saltRounds = 10;
const {User} = require('../models')
// const mongoose = require('mongoose');

const create =  (user) => {
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
				profile: {
					ssn: user.profile.ssn,
					address: user.profile.address,
					city: user.profile.city,
					state: user.profile.state,
					zipCode: user.profile.zipCode,
					phoneNumber: user.profile.phoneNumber,
					// emergencyContact: {
					// 	name: user.profile.emergencyContact.name,
					// 	phone: user.profile.emergencyContact.phone,
					// },
					insurance: user.profile.insurance,
					allergies: user.profile.allergies,
					reason_for_visit: user.profile.reason_for_visit,
				}
			});
			user.save((err) => {
				if (err) {
					console.error(`Could not create user error: ${err}`)
				} else {
					console.log('user saved.')
				}
			});
		} else {
			console.error(`Could not hash password error: ${err}`)
		}
	});
}

module.exports = create;