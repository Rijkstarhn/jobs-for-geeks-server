const jobsModel = require('../models/jobs/jobs-model');

const findAllJobs = () => jobsModel.find();

const findAJob = (job) => jobsModel.find(job);

const findJobById = (jid) => jobsModel.findById(jid);

const findJobsForUser = (uid) => jobsModel.find({userId: uid});

const createJob = (job) => {
    return jobsModel.create(job);
}

const deleteJob = (jid) => jobsModel.remove({_id: jid});

const updateJob = (jid, job) => jobsModel.updateOne({_id: jid},
    {$set: job});

const updateJobUser = (jid, uid) => jobsModel.updateOne(
    {_id: jid},
    {$push: {userId: uid}});

const countJobs = () => jobsModel.countDocuments();

module.exports = {
    findAllJobs: findAllJobs,
    findJobById: findJobById,
    findJobsForUser: findJobsForUser,
    createJob: createJob,
    deleteJob: deleteJob,
    updateJob: updateJob,
    findAJob,
    updateJobUser,
    countJobs,
};