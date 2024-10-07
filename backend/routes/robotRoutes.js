const express = require('express');
const router = express.Router();
const { getRobots, addRobot } = require('../controllers/robotController');
const { protect } = require('./auth');

// GET /api/robots
router.get('/robots', protect, getRobots);

// POST /api/robots
router.post('/robots', protect, addRobot);

module.exports = router;
