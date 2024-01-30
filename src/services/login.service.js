const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign(data, SECRET, jwtConfig);

const decodeToken = (token) => jwt.verify(token, SECRET);

module.exports = {
  generateToken,
  decodeToken,
};