const { User } = require('../models');
const { generateToken } = require('./login.service');
const { validateNewUser } = require('./validations/userValidations');
const { messagesHTTP } = require('../utils/mapHTTP');

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
    const error = validateNewUser(user);
    if (error) {
      return { status: messagesHTTP.BAD_REQUEST, data: error };
    }

    const dbUser = await findByEmail(user.email);

    if (dbUser) {
      return { status: messagesHTTP.CONFLICT, data: { message: 'User already registered' } };
    }

    await User.create(user);
    const data = {
      userId: user.id,
    };
    const token = generateToken({ data });
    return { status: messagesHTTP.CREATED, data: { token } };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  findByEmail,
  create,
};