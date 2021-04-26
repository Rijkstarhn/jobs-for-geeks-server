const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
            username: String,
            password: String,
            firstname: String,
            lastname: String,
            address: String,
            company: String,
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