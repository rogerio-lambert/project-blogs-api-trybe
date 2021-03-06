const express = require('express');

const { makeLogin } = require('../controllers/login');

const router = express.Router();

router.post('/', makeLogin);

module.exports = router;