const jwt = require('jsonwebtoken');
const dotenv = require('../../configEnv');

exports.authenticateJWT = (req, res, next) => {
    const isAuth = req.get('Authorization');
    console.log('AUTH', isAuth);
    const token = isAuth?.split(' ')[1];

    if (!isAuth) {
      const error = new Error('You do not have token');
      error.statusCode = 401;
      throw error;
    }


    if (!token) {
      const error = new Error('Not Authorizated!');
      error.statusCode = 403;
      throw error;
    }

    try {
      const decoded = jwt.verify(token, dotenv.ACCESS_TOKEN_SECRET);
      req.username = decoded.username;
    } catch (error) {
      if (error.message === "jwt expired") {
        const error = new Error('jwt expired');
        error.statusCode = 401;
        throw error;
      }

      if (error.message === "jwt malformed") {
        const error = new Error('jwt malformed');
        error.statusCode = 401;
        throw error;
      }
      throw error;
    }
  
    next();
}
