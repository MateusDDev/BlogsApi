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

module.exports = { addUserSchema };