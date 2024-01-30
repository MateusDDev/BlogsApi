const { userService } = require('../services');
const { validateNewUser } = require('./validations/userValidations');

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json({ users });
};

const createUser = async (req, res) => {
  try {
    const user = req.body;

    const error = validateNewUser(user);
    if (error) {
      return res.status(400).json(error);
    }

    const dbUser = await userService.findByEmail(user.email);

    if (dbUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = req.body;
    const token = await userService.create(newUser);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error });
  }
};

module.exports = {
  getAll,
  createUser,
};