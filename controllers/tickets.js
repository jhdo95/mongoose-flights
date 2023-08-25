const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create,
    show,
    delete: deleteTicket

}

async function newTicket(req, res) {
  // const tickets = await Ticket.findById('req.params.id')
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({});
    res.render('tickets/new', { flight });
}

async function create(req, res) {
  try {
    req.body.flight = req.params.id
    // const ticket = await Ticket.create(req.body)
    await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`)
  } catch (err) {
    console.log(err);
    res.redirect(`/flights/${req.params.id}/tickets/new`);
  }
}


async function show (req, res) {
  const ticket = await Ticket.findById(req.params.id).populate('flight')
  res.render('tickets/show', { ticket })
}


async function deleteTicket(req, res) {
  const ticket = await Ticket.findById(req.params.id).populate('flight')
  const flight = ticket.flight
  try {
    await Ticket.findByIdAndDelete(req.params.id)
    res.redirect(`/flights/${flight._id}`)
  } catch (err) {
    console.log(err)
    res.redirect(`/flights/${flight._id}`)
  }
}