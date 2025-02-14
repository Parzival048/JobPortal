const express = require('express');
const { scheduleInterview, getInterviews } = require('../controllers/interviewController');
const router = express.Router();

router.post('/interviews', scheduleInterview);
router.get('/interviews/:userId', getInterviews);

module.exports = router;