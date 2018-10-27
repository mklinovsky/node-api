const jwt = require('jsonwebtoken');
const router = require('express').Router();
const config = require('../../config');

router.post('/', function (req, res) {

	//find user in db

	const user = {
		id: 1,
		username: 'username',
		email: 'user@mail.com'
	};

	const token = jwt.sign(user, config.secret, {
		expiresIn: 30 * 60
	});

	res.json({
		success: true,
		token: token
	});
});

module.exports = router;
