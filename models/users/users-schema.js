const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        address: String,
        affiliation: String,
        email: String,
        phone: String,
        type: {type: String, enum: ['JOB SEEKER', 'RECRUITER']},
        education: String,
        experience: String,
        skills: String,
        licenceAndCertifications: String,
        users: [{type: String, ref: 'UserModel'}],
        jobs:[{type: String, ref: 'JobModel'}],
    }, {collection: 'users'});

module.exports = usersSchema;