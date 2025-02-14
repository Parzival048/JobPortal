const express = require('express');
const { postReview, getReviews } = require('../controllers/companyReviewController');
const router = express.Router();

router.post('/companies/:companyId/reviews', postReview);
router.get('/companies/:companyId/reviews', getReviews);

module.exports = router;