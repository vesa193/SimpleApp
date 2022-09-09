const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');

exports.getProfile = async (req, res, next) => {
    const auth = req.get('Authorization');
    const token = auth.split(' ')[1];
    const { username } = jwt.decode(token);

    User.findOne({ username }).then(user => {
        if (user.username !== username) {
            return res.status(400).json({ message: 'User does not exist.' });
        }
    
        return res.status(200).json({ data: {
            id: user._id,
            username,
            createdAt: user.createdAt
        } });
    });
};