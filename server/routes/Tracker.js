const express = require('express');
const router = express.Router();

const {auth} = require('../middlewares/auth');
const {dailyTarget} = require('../controllers/CompaniesApply');
router.post('/daily-target',auth, dailyTarget);

module.exports = router;