const express = require('express');
const { adminLogin, getAllUsers, getAllJobs } = require('../controllers/adminController');
const router = express.Router();

router.post('/admin/login', adminLogin);
router.get('/admin/users', getAllUsers);
router.get('/admin/jobs', getAllJobs);

module.exports = router;