const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
    },
    price: {
        type: Number,
        min: 0,
    },
    flight: { //if add [] can change to a M:M relationship instead of 1:M
        type: Schema.Types.ObjectId,
        ref: 'Flight'
        } 
        
    }
);

module.exports = mongoose.model('Ticket', ticketSchema);