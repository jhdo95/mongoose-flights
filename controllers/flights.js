const Flight = require('../models/flight');

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
      res.render('flights/new', { errorMsg: err.message});
   }
    
}

async function index(req, res) {
   const flights = await Flight.find({});
   res.render('flights/index', { title: 'All Flights', flights});
}

async function show(req, res) {
   const flight = await Flight.findById(req.params.id);
   console.log('flight', flight);
   res.render('flights/show', {title: 'Flight Detail', flight})
   
}