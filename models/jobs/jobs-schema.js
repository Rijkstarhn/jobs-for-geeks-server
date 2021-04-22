const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    jobId: String,
    userId: {type: [String], ref: 'UserModel'},
    title: String,
    company: String,
    createdTime: String,
    note: String,
}, {collection: 'jobs'});

module.exports = jobSchema;