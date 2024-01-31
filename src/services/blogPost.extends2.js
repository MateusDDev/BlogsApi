const { BlogPost, Category, User } = require('../models');
const { messagesHTTP } = require('../utils/mapHTTP');
const { validateEditBlogPost } = require('./validations/inputValidations');

const updating = async (newContent, id) => {
  await BlogPost.update(
    { title: newContent.title, content: newContent.content },
    {
      where: { id },
    },
  );

  const newPost = await BlogPost.findByPk(id, {
    include: [
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
      {
        model: User, as: 'user', attributes: { exclude: 'password' },
      },
    ],
  });
  
  return newPost;
};
  
const edit = async (id, user, newContent) => {
  if (Number(id) !== user.id) {
    return { status: messagesHTTP.UNAUTHORIZED, data: { message: 'Unauthorized user' } };
  }
  
  const error = validateEditBlogPost(newContent);
  if (error) return { status: messagesHTTP.BAD_REQUEST, data: error };

  const newPost = await updating(newContent, id);
  
  return { status: messagesHTTP.SUCCESS, data: newPost };
};

module.exports = {
  edit,
};