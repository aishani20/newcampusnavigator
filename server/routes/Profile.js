const express = require('express');
const router = express.Router();

const { deleteAccount } = require('../controllers/Profile');
const {auth} = require('../middlewares/auth');

router.delete('/deleteAccount',auth, deleteAccount);

module.exports = router;