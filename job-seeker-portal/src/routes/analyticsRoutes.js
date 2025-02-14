const express = require('express');
const { getJobAnalytics, getApplicationAnalytics } = require('../controllers/analyticsController');
const router = express.Router();

// Route to get job analytics
router.get('/jobs', getJobAnalytics);

// Route to get application analytics
router.get('/applications', getApplicationAnalytics);

module.exports = router;