const Flight = require('../models/flight');

module.exports = {
    create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    console.log()
    // We can push (or unshift) subdocs into Mongoose arrays
    flight.destination.push(req.body);
    try {
        // Save changes made to flight doc
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    // Respond to the request. (if data has been changed then redirect)
    res.redirect(`/flights/${flight._id}`);
}