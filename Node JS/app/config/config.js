 module.exports = {
 	name: 'user',
 	hostname: 'http://localhost',
 	version: '0.0.1',
 	port: 3002,
 	db: {
 		get: mysql.createConnection({
 			host: 'localhost',
 			user: 'root',
 			password: '',
			database: 'db_student'
 		})
 	}
 }
