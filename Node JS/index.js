const restify = require('restify');
const config = require('./app/config/config');
const router = require('./app/routes/routes');

const server = restify.createServer({
	name: config.name,
	version: config.version,
	url: config.hostname,
});

const corsMiddleware = require('restify-cors-middleware');
const cors = corsMiddleware({
	'origins': ['*']
});
server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.jsonBodyParser());
server.use(expressValidator());

router(server);

server.listen(3002);