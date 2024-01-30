const { messagesHTTP } = require('../utils/mapHTTP');
const { validateNewCategory } = require('./validations/inputValidations');
const { Category } = require('../models');

const create = async (category) => {
  const error = validateNewCategory(category);
  if (error) {
    return {
      status: messagesHTTP.BAD_REQUEST,
      data: error,
    };
  }

  const newCategory = await Category.create(category);

  return {
    status: messagesHTTP.CREATED,
    data: newCategory,
  };
};

module.exports = {
  create,
};