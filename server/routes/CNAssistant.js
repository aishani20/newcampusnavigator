const express = require('express');
const router = express.Router();

const {getAssistantResponse} = require('../controllers/CNAssistant');

router.post("/chat-cnassistant", getAssistantResponse);
module.exports = router;