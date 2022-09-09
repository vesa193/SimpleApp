const jwt = require('jsonwebtoken');
const dotenv = require('../../configEnv');


const generateToken = (userData, tokenSecret, expirationTime) => {
    return jwt.sign(userData, tokenSecret, { expiresIn: expirationTime });
};

const verifyRefresh = (token) => {
    try {
        const decoded = jwt.verify(token, dotenv.REFRESH_TOKEN_SECRET);
        console.log('decoded', decoded);
        return { username: decoded?.username, isValid: true };
    } catch (error) {
        console.error(error);
        return { isValid: false };
    }
}

module.exports = { verifyRefresh, generateToken };
