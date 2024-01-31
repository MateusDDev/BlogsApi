const router = require('express').Router();
const { blogPostController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');

router.post('/', validateJWT, blogPostController.createBlogPost);
router.get('/', validateJWT, blogPostController.getAllBlogPosts);

module.exports = router;