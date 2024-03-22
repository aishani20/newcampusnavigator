const express = require('express');
const router = express.Router();

const {auth} = require('../middlewares/auth');
const {predict} = require('../controllers/Prediction');

router.post('/predict',auth,predict);

module.exports = router;