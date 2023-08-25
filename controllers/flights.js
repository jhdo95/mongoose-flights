const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
 
module.exports = {
    new: newFlight,
    create,
    index,
    show,
   
 }

 function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''} );
 }

 async function create(req, res) {
   try {
      await Flight.create(req.body);
      res.redirect('/flights');
   } catch (err) {
      console.log(err);
      res.redirect('flights/new', { errorMsg: err.message});
   }
    
}

async function index(req, res) {
   const flights = await Flight.find({});
   res.render('flights/index', { title: 'All Flights', flights});
}

async function show(req, res) {
   const flight = await Flight.findById(req.params.id)
   const tickets = await Ticket.find({ flight: flight._id }).populate('flight');
   res.render('flights/show', { flight, tickets });
   
}