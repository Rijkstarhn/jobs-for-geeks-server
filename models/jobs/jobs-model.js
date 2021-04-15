const mongoose = require('mongoose');
const jobSchema = require('./jobs-model');

const jobModel =
    mongoose.model('JobModel', jobSchema);

module.exports = jobModel;