const jobsDao = require('../daos/jobs-dao');

const findAllJobs = () => jobsDao.findAllJobs();

const findJobById = (jid) => jobsDao.findJobById(jid);

const findJobsForUser = (uid) => jobsDao.findJobsForUser(uid);

const createJobForUser = (uid, job) => {
    const newJob = {
        jobId: job.id,
        userId: uid,
        title: job.title,
    };
    return jobsDao.createJob(newJob)
};

const deleteJob = (jid) => jobsDao.deleteJob(jid);

const updateJob = (jid, job) => jobsDao.updateJob(jid, job);

module.exports = {
    findAllJobs: findAllJobs,
    findJobById: findJobById,
    findJobsForUser: findJobsForUser,
    createJobForUser: createJobForUser,
    deleteJob,
    updateJob,
};