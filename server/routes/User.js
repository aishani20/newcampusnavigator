const express = require('express');
const router = express.Router();

const { signup,verifyOtp,login } = require('../controllers/Auth');
const { resetPasswordToken } = require('../controllers/ResetPassword');

router.post('/signup',signup);
router.post('/verify-email',verifyOtp);
router.post('/login',login);


//Reset Password
router.post('/reset-password',resetPasswordToken);
module.exports = router;