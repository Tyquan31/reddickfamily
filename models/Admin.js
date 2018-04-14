var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    password: {
        type: String
    },
    username: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;