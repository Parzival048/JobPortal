const express = require('express');
const { createResource, getResources } = require('../controllers/resourceController');
const router = express.Router();

router.post('/resources', createResource);
router.get('/resources', getResources);

module.exports = router;