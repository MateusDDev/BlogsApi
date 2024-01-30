const { messagesHTTP } = require('../utils/mapHTTP');
const { validateNewCategory } = require('./validations/inputValidations');
const { Category } = require('../models');

const findAll = async () => {
  const categories = await Category.findAll();
  return {
    status: messagesHTTP.SUCCESS,
    data: categories,
  };
};

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
  findAll,
  create,
};