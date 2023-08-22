const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flights = [];

module.exports = {
    getAll
}

const destinationSchema = new Schema ({
    airport: {
        type: String,
    
    },
    airline: {
        type: String,
    },

    arrival: {
        type: Date,
    },
    departureFlightNo: {
        type: Number,
        min: 1000,
        max: 9999,
    }
}, {
    timestamps: true
})

const flightSchema = new Schema ({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destination: [destinationSchema]
}, {
    timestamps: true
});

function getAll() {
    return flights;
}
// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);