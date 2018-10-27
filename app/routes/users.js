const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', function (req, res) {

	const users = [{
		username: 'username_1'
	},{
		username: 'username_2'
	}];

	res.json(users);
});

module.exports = router;
