const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    userId: {type: [String], ref: 'UserModel'},
    title: String,
    description: String,
    location: String,
    full_time: Boolean,
}, {collection: 'jobs'});

module.exports = jobSchema;