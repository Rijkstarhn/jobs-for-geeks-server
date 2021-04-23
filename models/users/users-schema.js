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
            role: {type: String, enum: ['JOB SEEKER', 'RECRUITER']},
            education: String,
            experience: String,
            skills: String,
            licenceAndCertifications: String,
            interestedUsers: [{type: String, ref: 'UserModel'}],
            interestedJobs:[{type: String, ref: 'JobModel'}],
    }, {collection: 'users'});

module.exports = usersSchema;