var express = require('express');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/users');
var authenticateRoute = require('./routes/authenticate');
var authorization = require('./middlewares/authorization');
var security = require('./middlewares/security');
var config = require('../config');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(security);
app.use(authorization.unless({
	path: config.authenticationUrl
}));

app.use(config.authenticationUrl, authenticateRoute);
app.use('/api/users', userRoutes);

module.exports = app;