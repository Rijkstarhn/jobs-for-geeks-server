const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
<<<<<<< HEAD
    jobId: String,
    userId: String,
=======
    userId: {type: [String], ref: 'UserModel'},
>>>>>>> a365912fe6e66ce046f99644142d251b35750d4c
    title: String,
}, {collection: 'jobs'});

module.exports = jobSchema;