const router = require('express').Router();
const { blogPostController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');

router.post('/', validateJWT, blogPostController.createBlogPost);
router.get('/', validateJWT, blogPostController.getAllBlogPosts);
router.get('/:id', validateJWT, blogPostController.getBlogPostById);
router.put('/:id', validateJWT, blogPostController.editBlogPost);

module.exports = router;