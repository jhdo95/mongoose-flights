const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /tickets/new (new functionality)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /tickets (create functionality)
router.post('/flights/:id/tickets', ticketsCtrl.create);
// POST /flights/:id/tickets (associate a ticket with a flight)
router.get('/tickets/:id', ticketsCtrl.show);

module.exports = router;