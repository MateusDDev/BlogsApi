const { userService } = require('../services');
const { loginService } = require('../services');

const isBodyValid = (email, password) => email && password;

const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const dbUser = await userService.findByEmail(email);

    if (!dbUser || dbUser.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const data = {
      userId: dbUser.id,
    };

    const token = loginService.generateToken({ data });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  getLogin,
};