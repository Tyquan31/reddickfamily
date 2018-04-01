var mongoose = require('mongoose');

var babyRsvpSchema = mongoose.Schema({
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

var BabyRsvp = mongoose.model('BabyRsvp', babyRsvpSchema);

module.exports = BabyRsvp;