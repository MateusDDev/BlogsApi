const { blogPostService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapHTTP');

const createBlogPost = async (req, res) => {
  try {
    const post = req.body;
    const { id } = req.user.data;

    const { status, data } = await blogPostService.create(post, id);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

module.exports = {
  createBlogPost,
};