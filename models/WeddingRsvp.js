var mongoose = require('mongoose');

var weddingRsvpSchema = mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    kids: {
        type: Number
    },
    adults: {
        type: Number
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

var WeddingRsvp = mongoose.model('WeddingRsvp', weddingRsvpSchema);

module.exports = WeddingRsvp;