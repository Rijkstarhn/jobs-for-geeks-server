const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    jobId: String,
    userId: String,
    userId: {type: [String], ref: 'UserModel'},
    title: String,
}, {collection: 'jobs'});

module.exports = jobSchema;