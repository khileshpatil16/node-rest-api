module.exports = function (app) {

	var userLogin = require('../controllers/UserLogin');
	
	app.get('/', function (req, res, next) {
		res.send("Don't even try");
	});

	app.get('/UserLogin/:email/:password', userLogin.login);

}
	