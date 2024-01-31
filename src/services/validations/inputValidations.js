const { addUserSchema, addCategorySchema, addBlogPost, editBlogPost } = require('./schemas');

const validateNewUser = (user) => {
  const { error } = addUserSchema.validate(user);

  if (error) return { message: error.message };
};

const validateNewCategory = (category) => {
  const { error } = addCategorySchema.validate(category);

  if (error) return { message: error.message };
};

const validateNewBlogPost = (post) => {
  const { error } = addBlogPost.validate(post);
  if (error) return { message: error.message };
};

const validateEditBlogPost = (newContent) => {
  const { error } = editBlogPost.validate(newContent);

  if (error) return { message: error.message };
};

module.exports = {
  validateNewUser,
  validateNewCategory,
  validateNewBlogPost,
  validateEditBlogPost,
};