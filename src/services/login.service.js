const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign(data, SECRET, jwtConfig);

const decodeToken = (bearerToken) => {
  const token = bearerToken.split(' ')[1];
  return jwt.verify(token, SECRET);
};

module.exports = {
  generateToken,
  decodeToken,
};