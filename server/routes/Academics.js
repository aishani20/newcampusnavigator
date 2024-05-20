const express = require('express');
const router = express.Router();

const {uploadPYQ} = require('../controllers/Academics');

router.post("/uploadpyq", uploadPYQ);
module.exports = router;