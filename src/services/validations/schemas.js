const Joi = require('joi');

const addUserSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().messages({
    'strign.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

const addCategorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '"name" is required',
  }),
});

const addBlogPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
}).messages({
  'string.empty': 'Some required fields are missing',
});

module.exports = { 
  addUserSchema,
  addCategorySchema,
  addBlogPost,
};