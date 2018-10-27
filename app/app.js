const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const authenticateRoute = require('./routes/authenticate');
const auth = require('./middlewares/authentication');
const security = require('./middlewares/security');
const config = require('../config');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(security);
app.use(auth.unless({
	path: config.authenticationUrl
}));

app.use(config.authenticationUrl, authenticateRoute);
app.use('/api/users', userRoutes);

module.exports = app;
