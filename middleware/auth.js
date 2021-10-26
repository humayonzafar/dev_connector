const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    //get jwt token from header
    const token = req.header('x-auth-token');

    //check if no token
    if (!token) {
        return res.status(res.locals.httpsStatusCodes.UNAUTHORIZED).json({msg: 'No Token, authorization denied'});
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (err) {
        return res.status(res.locals.httpsStatusCodes.UNAUTHORIZED).json({msg: 'Token is not valid...'});
    }
}