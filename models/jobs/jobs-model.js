const mongoose = require('mongoose');
const jobSchema = require('./jobs-schema');

const jobModel =
    mongoose.model('JobModel', jobSchema);

module.exports = jobModel;