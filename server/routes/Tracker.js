const express = require('express');
const router = express.Router();

const {auth} = require('../middlewares/auth');
const {dailyTarget, appliedCompaniesData} = require('../controllers/CompaniesApply');
router.post('/daily-target',auth, dailyTarget);
router.get('/applied-companies',auth, appliedCompaniesData);

module.exports = router;