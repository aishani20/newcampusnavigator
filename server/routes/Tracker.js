const express = require('express');
const router = express.Router();

const {dailyTarget} = require('../controllers/Tracker');
router.post('daily-target',dailyTarget);

module.exports = router;