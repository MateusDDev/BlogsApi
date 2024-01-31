const userService = require('./user.service');
const loginService = require('./login.service');
const categoryService = require('./category.service');
const blogPostService = require('./blogPost.service');
const extendsBlogPostService = require('./blogPost.extends');

module.exports = {
  userService,
  loginService,
  categoryService,
  blogPostService,
  extendsBlogPostService,
};