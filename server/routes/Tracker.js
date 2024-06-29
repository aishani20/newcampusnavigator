const express = require('express');
const router = express.Router();

const {auth} = require('../middlewares/auth');
const {dailyTarget, appliedCompaniesData, extensionData} = require('../controllers/CompaniesApply');
router.post('/daily-target',auth, dailyTarget);
router.get('/applied-companies',auth, appliedCompaniesData);
router.get('/extension-data',auth, extensionData);

module.exports = router;