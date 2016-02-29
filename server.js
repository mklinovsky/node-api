var api = require('./app/app');
var port = process.env.PORT || 8080;

api.listen(port, function () {
	console.log('API listening on port: ' + port);
});