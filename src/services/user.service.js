const { User } = require('../models');
const { validateNewUser } = require('./validations/inputValidations');
const { messagesHTTP } = require('../utils/mapHTTP');
const { generateToken } = require('./login.service');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: messagesHTTP.SUCCESS, data: users };
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const findById = async (id) => {
  const user = await User.findOne({
    where: id,
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: messagesHTTP.NOT_FOUND, data: { message: 'User does not exist' } };
  }
  return { status: messagesHTTP.SUCCESS, data: user };
};

const create = async (user) => {
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
};

module.exports = {
  getAll,
  findByEmail,
  findById,
  create,
};