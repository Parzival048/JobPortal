// src/routes/resumeRoutes.js

const express = require('express');
const resumeController = require('../controllers/resumeController');
const router = express.Router();

router.post('/resumes', resumeController.createResume);
router.get('/resumes/:userId', resumeController.getResumes);

module.exports = router;