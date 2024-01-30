const router = require('express').Router();
const { getLogin } = require('../controllers/login.controller');

router.post('/', getLogin);

module.exports = router;