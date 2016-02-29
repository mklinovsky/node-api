var express = require('express');
var bodyParser = require('body-parser');
var userRoutes = require('./routes/users');
var authenticateRoute = require('./routes/authenticate');
var authorization = require('./middlewares/authorization');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/authenticate', authenticateRoute);
app.use(authorization);

app.use('/api/users', userRoutes);

module.exports = app;