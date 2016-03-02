var jwt = require('jsonwebtoken');
var router = require('express').Router();
var config = require('../../config');

router.post('/', function (req, res) {
	
	//find user in db
	
	var user = {
		id: 1,
		username: 'username',
		email: 'user@mail.com'
	};

	var token = jwt.sign(user, config.secret, {
		expiresIn: 30 * 60
	});

	res.json({
		success: true,
		token: token
	});
});

module.exports = router;