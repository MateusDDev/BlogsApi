const { BlogPost, PostCategory, Category } = require('../models');
const { messagesHTTP } = require('../utils/mapHTTP');
const { validateNewBlogPost } = require('./validations/inputValidations');

const newBlogPost = async (blogPost, userId) => {
  const error = validateNewBlogPost(blogPost);
  if (error) return { status: messagesHTTP.BAD_REQUEST, data: error };

  const newPost = {
    ...blogPost,
    userId,
    updated: new Date().toISOString(),
    published: new Date().toISOString(),
  };

  const post = await BlogPost.create(newPost);

  return { status: messagesHTTP.CREATED, data: post };
};

const newPostCategory = async (postId, categories) => {
  const validIds = await Category.findAll({ where: { id: categories } });

  if (validIds.length !== categories.length || categories.length < validIds.length) {
    return { status: messagesHTTP.BAD_REQUEST,
      data: { message: 'one or more "categoryIds" not found' } };
  }

  const items = categories.map((id) => ({
    postId,
    categoryId: id,
  }));

  await PostCategory.bulkCreate(items, {
    fields: ['postId', 'categoryId'],
  });

  return null;
};

const create = async (blogPost, userId) => {
  const newPost = await newBlogPost(blogPost, userId);
  if (newPost) {
    const newItem = await newPostCategory(newPost.data.id, blogPost.categoryIds);
    if (newItem) return newItem;
  }

  return newPost;
};

module.exports = {
  create,
};