const { BlogPost } = require('../models');
const { messagesHTTP } = require('../utils/mapHTTP');
const { validateNewBlogPost } = require('./validations/inputValidations');

const create = async (blogPost, userId) => {
  const error = validateNewBlogPost(blogPost);
  if (error) {
    return { status: messagesHTTP.BAD_REQUEST, data: error };
  }

  const newPost = {
    ...blogPost,
    userId,
    updated: new Date().toISOString(),
    published: new Date().toISOString(),
  };

  const post = await BlogPost.create(newPost);

  return {
    status: messagesHTTP.CREATED,
    data: post,
  };
};

module.exports = {
  create,
};