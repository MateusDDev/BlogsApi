const { User } = require('../models');
const { validateNewUser } = require('./validations/userValidations');
const { messagesHTTP } = require('../utils/mapHTTP');
const { generateToken } = require('./login.service');

const getAll = async () => {
  try {
    const users = await User.findAll({
      attributes: { exclude: 'password' },
    });
    return { status: messagesHTTP.SUCCESS, data: users };
  } catch (error) {
    return { error };
  }
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const findById = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    return { status: messagesHTTP.SUCCESS, data: user };
  } catch (error) {
    return { error };
  }
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
    return { error };
  }
};

module.exports = {
  getAll,
  findByEmail,
  findById,
  create,
};