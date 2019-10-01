var config = require('../config/config');
var connection = config.db.get;

module.exports = {

	validateUser: (req, result) => {

		var email = req.params.email;
		var password = req.params.password;

		var queryStatementOne = 'SELECT u.user_id AS userId FROM users AS u WHERE u.email=? AND u.password=?';

		connection.query(queryStatementOne, [email, password], function (error, results, fields) {
			if (error) result({ status: false, message: "Something went wrong, please try again" });
			if (results.length == 0) {
				result({ status: false, message: "Invalid Credentials" });
			} else {
				result({ status: true, message: "Logged in successfully" });
			}
		});
	},
}
