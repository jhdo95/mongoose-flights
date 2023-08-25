const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
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
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        required: true,
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear()+1))
    },
    destination: [destinationSchema]
}, {
    timestamps: true
});

function getAll() {
    return flights;
}
// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);