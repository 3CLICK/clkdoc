const auth = require('../scripts/auth');

module.exports = {
	authenticate: function (req, res) {
		auth(req, res, result => {
			if (result) {
				console.log("ŸES", result)
				res.status(200).send("OK"); /* redirect('/') */
			} else {
				res.status(500).send("BAD");
			}
		})
	}
};