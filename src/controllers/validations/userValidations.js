const { addUserSchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = addUserSchema.validate(user);

  if (error) {
    return {
      message: error.message,
    };
  }
};

module.exports = {
  validateNewUser,
};