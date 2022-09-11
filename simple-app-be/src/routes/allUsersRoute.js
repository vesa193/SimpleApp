const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');

exports.getAllUsers = (req, res, next) => {
    const auth = req.get('Authorization');
    const token = auth.split(' ')[1];
    const decodedToken = jwt.decode(token);
    const users = User.find({}, (err, users) => {
        const userMap = {};

        users.forEach((user) => {
            if (user.username !== decodedToken.username) {
                userMap[user._id] = user;
            }
        });

        res.send(userMap);
    });
}