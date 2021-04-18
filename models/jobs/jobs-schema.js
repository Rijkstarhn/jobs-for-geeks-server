const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    jobId: String,
    userId: String,
    title: String,
}, {collection: 'jobs'});

module.exports = jobSchema;