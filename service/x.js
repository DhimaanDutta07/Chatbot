const jwt = require('jsonwebtoken');
const secret = '123';

function setuser(user) {
    return jwt.sign({ Id: user._id, email: user.Email, password:user.Password }, secret);
}

function getuser(token) {
    if (!token) return console.log('no user found');
    return jwt.verify(token, secret);
}

module.exports = { setuser, getuser };