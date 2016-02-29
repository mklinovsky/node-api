var router = require('express').Router();
var jwt = require('jsonwebtoken');

router.get('/', function (req, res) {

	var users = [{
		username: 'username_1'
	},{
		username: 'username_2'
	}];

	res.json(users);
});

module.exports = router;