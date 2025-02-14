const express = require('express');
const { postJob, getAllJobs, searchJobs, getJobById } = require('../controllers/jobController');
const router = express.Router();

router.post('/jobs', postJob);
router.get('/jobs', getAllJobs);
router.get('/jobs/search', searchJobs);
router.get('/jobs/:jobId', getJobById);

module.exports = router;