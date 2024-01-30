const { User } = require('../models');
const { generateToken } = require('./login.service');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const create = async (user) => {
  try {
    await User.create(user);
    const data = {
      userId: user.id,
    };
    const token = generateToken({ data });
    return token;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  findByEmail,
  create,
};