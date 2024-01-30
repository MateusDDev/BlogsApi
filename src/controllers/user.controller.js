const { userService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapHTTP');

const getAllUsers = async (req, res) => {
  try {
    const { status, data } = await userService.getAll();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const { status, data } = await userService.create(newUser);

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};