const express = require('express');
const { createProfile, getProfile, updateProfile } = require('../controllers/userProfileController');
const router = express.Router();

router.post('/profiles', createProfile);
router.get('/profiles/:userId', getProfile);
router.put('/profiles/:userId', updateProfile);

module.exports = router;