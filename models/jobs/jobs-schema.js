const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    location: String,
    full_time: Boolean,
}, {collection: 'jobs'});

module.exports = jobSchema;