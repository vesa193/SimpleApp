const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../model/UserModel');
const dotenv = require('../../configEnv');
const { verifyRefresh } = require('../utils/utils');

const accessTokenSecret = dotenv.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = dotenv.REFRESH_TOKEN_SECRET;

function generateToken(userData, tokenSecret, expirationTime) {
    return jwt.sign(userData, tokenSecret, { expiresIn: expirationTime });
};

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const accessToken = generateToken({ username }, accessTokenSecret, '1m');
    const refreshToken = generateToken({ username }, refreshTokenSecret, '5m');
    
    User.findOne({ username }).then(user => {
        if (!user) return res.status(400).json({ message: 'User not exist' });

        bcrypt.compare(password, user.password, (err, data) => {
            if (err) throw err;

            if (!data) {
                return res.status(400).json({ message: 'Invalid credentials' })
            }
            return res.status(200).json({ accessToken, refreshToken, user: { id: user._id, username, createdAt: user.createdAt }, message: 'Login success' })
        })
    })
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!(username && password)) {
        return res.status(400).json({ message: 'Username or password is wrong!' })
    }

    let user = await User.findOne({ username });

    if (user) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    user = new User({ username, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.createdAt = new Date().toISOString();
    user.save();

    const accessToken = generateToken({ username }, accessTokenSecret, '1m');
    const refreshToken = generateToken({ username }, refreshTokenSecret, '5m');
    return res.status(201).json({ accessToken, refreshToken, user: { id: user._id, username, createdAt: user.createdAt }, message: 'Registrate success' });
});

router.post('/token', async (req, res) => {
    const { username, refreshToken } = req.body;
    
    if (!(username && refreshToken)) {
        return res.status(400).json({ message: "Wrong field posted" });
    }

    const isValid = verifyRefresh(username, refreshToken);
    
    if (!isValid) {
        return res.status(403).json({ message: "Token is not valid" });
    }

    const accessToken = generateToken({ username }, accessTokenSecret, '1m');
    res.json({ accessToken });
});

module.exports = router;