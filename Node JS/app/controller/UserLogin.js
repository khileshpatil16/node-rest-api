var userLogin = require('../models/UserLogin');

module.exports = {
	login: (req, res) => {
		userLogin.validateUser(req, (result) => {
			res.send(result);
		});
	},
}