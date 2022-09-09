const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');

exports.getProfile = async (req, res, next) => {
    const auth = req.get('Authorization');
    const accessToken = auth.split(' ')[1];
    const { username } = jwt.decode(accessToken);

    User.findOne({ username }).then(user => {
        // if (user.username !== username) {
        //     return res.status(400).json({ message: 'User does not exist.' });
        // }
        try {
            return res.status(200).json({ accessToken, user: { id: user._id, username, createdAt: user.createdAt }, message: 'Profile fetched successful' });
        } catch (error) {
            return res.status(400).json({ message: 'User does not exist.' });
        }
    
    });
};