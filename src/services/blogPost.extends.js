const { BlogPost, Category, User } = require('../models');
const { messagesHTTP } = require('../utils/mapHTTP');

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { 
        model: Category, 
        as: 'categories', 
        through: { attributes: [] }, 
      }, 
      { 
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  return { status: messagesHTTP.SUCCESS, data: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });

  if (!post) return { status: messagesHTTP.NOT_FOUND, data: { message: 'Post does not exist' } };

  return { status: messagesHTTP.SUCCESS, data: post };
};

module.exports = {
  findAll,
  findById,
};