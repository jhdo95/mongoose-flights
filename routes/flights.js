var express = require('express');
var router = express.Router();

// Create controller module
const flightsCtrl = require('../controllers/flights');

// All ROUTES DEFAULT to /flights
// GET route for /flights/new
router.get('/new', flightsCtrl.new);

// POST route for /flights
router.post('/', flightsCtrl.create);

// GET route for /flights
router.get('/', flightsCtrl.index);

// Get /flights:id (show functionality) must be below new route
router.get('/:id', flightsCtrl.show);

module.exports = router;
