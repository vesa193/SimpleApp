const User = require('../model/UserModel');

exports.getAllUsers = (req, res, next) => {
    const users = User.find({}, (err, users) => {
        const userMap = {};

        users.forEach((user) => {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });
}