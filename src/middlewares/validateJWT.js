const { userService } = require('../services');
const { decodeToken } = require('../services/login.service');
const { mapStatusHTTP, messagesHTTP } = require('../utils/mapHTTP');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(
      mapStatusHTTP(messagesHTTP.UNAUTHORIZED),
    ).json({ message: 'Token not found' });
  }

  try {
    const tokenData = decodeToken(authorization);

    const user = await userService.findById(tokenData.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Error when searching for user by token.' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};