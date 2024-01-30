const router = require('express').Router();
const { userController } = require('../controllers');
const validateJWT = require('../middlewares/validateJWT');

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getAllUsers);
router.get('/:id', validateJWT, userController.getUserById);

module.exports = router;