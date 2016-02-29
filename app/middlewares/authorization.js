var jwt = require('jsonwebtoken');
var config = require('../../config');

function authorizationMiddleware (req, res, next) {
	var token = req.headers['x-access-token'];

	if (token) {
		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				return res.json({
					success: false,
					message: 'Authentication failed'
				});
			} else {
				req.user = decoded;
				next();
			}
		});
	} else {
		return res.status(403).send({ 
        	success: false, 
        	message: 'No token provided.' 
    	});
	}
}

module.exports = authorizationMiddleware;