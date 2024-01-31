const { blogPostService, extendsBlogPostService, extends2BlogPostService } = require('../services');
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

const getAllBlogPosts = async (_req, res) => {
  try {
    const { status, data } = await extendsBlogPostService.findAll();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await extendsBlogPostService.findById(id);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const editBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user.data;
    const newContent = req.body;
    const { status, data } = await extends2BlogPostService.edit(id, user, newContent);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  editBlogPost,
};