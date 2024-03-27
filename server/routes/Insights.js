const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares/auth');
const {getAllInsights, createInsight} = require('../controllers/Insights');

router.post("/createInsight", auth, createInsight);
router.get("/getAllInsights", auth, getAllInsights);

module.exports = router;