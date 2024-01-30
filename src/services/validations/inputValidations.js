const { addUserSchema, addCategorySchema } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = addUserSchema.validate(user);

  if (error) return { message: error.message };
};

const validateNewCategory = (category) => {
  const { error } = addCategorySchema.validate(category);

  if (error) return { message: error.message };
};

module.exports = {
  validateNewUser,
  validateNewCategory,
};