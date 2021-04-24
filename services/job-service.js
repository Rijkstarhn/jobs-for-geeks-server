const jobsDao = require('../daos/jobs-dao');
const usersDao = require('../daos/users-dao');

const findAllJobs = () => jobsDao.findAllJobs();

const findJobById = (jid) => jobsDao.findJobById(jid);

const findJobsForUser = (uid) => jobsDao.findJobsForUser(uid);

const createJobForUser = (uid, job) => {
    let findJobCondition = {};
    findJobCondition.company = job.company;
    findJobCondition.createdTime = job.createdTime;
    return jobsDao.findAJob(findJobCondition)
        .then(foundJob => {
            let newJob = {};
            if (foundJob.length === 0) {
                jobsDao.countJobs()
                    .then(() => {
                        newJob = {
                            jobId: job.id,
                            userId: uid,
                            company: job.company,
                            createdTime: job.createdTime,
                            title: job.title,
                            note: job.note,
                        }
                        usersDao.addJobToUser(uid, newJob.jobId);
                        return jobsDao.createJob(newJob);
                    })
            }
            else {
                if (foundJob[0].userId.find(element => uid === element) !== undefined) {
                    return null;
                } else {
                    usersDao.addJobToUser(uid, foundJob[0].jobId);
                    return jobsDao.updateJobUser(foundJob[0]._id, uid);
                }
            }
        })
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