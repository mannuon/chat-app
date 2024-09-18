const express = require('express');
const AuthUserController = require('../controller/user.controller')

const router = express.Router();


router.post('/register',AuthUserController.register);
router.post('/login',AuthUserController.login);




module.exports = router