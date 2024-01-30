const router = require('express').Router();
const { loginController } = require('../controllers');

router.post('/', loginController.getLogin);

module.exports = router;