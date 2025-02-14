const express = require('express');
const { applyForJob, getJobApplications } = require('../controllers/applicationController');
const router = express.Router();

router.post('/apply', applyForJob);
router.get('/applications/:jobId', getJobApplications);

module.exports = router;