const express = require('express');
const { getRecommendations, createRecommendation } = require('../controllers/jobRecommendationController');
const router = express.Router();

router.get('/recommendations/:userId', getRecommendations);
router.post('/recommendations', createRecommendation);

module.exports = router;