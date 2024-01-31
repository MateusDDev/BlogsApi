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

module.exports = {
  findAll,
};