const { signup, login } = require('../Controllers/AuthController');
const { SignUpValidation, LoginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// login route
router.post('/login',LoginValidation, login);

// Signup route
router.post('/signup', SignUpValidation, signup);

module.exports = router;
