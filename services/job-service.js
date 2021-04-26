const jobsDao = require('../daos/jobs-dao');
const usersDao = require('../daos/users-dao');

const findAllJobs = () => jobsDao.findAllJobs();

const findJobById = (jid) => jobsDao.findJobById(jid);

const findJobsForUser = (uid) => jobsDao.findJobsForUser(uid);

const createJobForUser = (uid, job) => {
    console.log("called!", job.created_at);
    let findJobCondition = {};
    findJobCondition.company = job.company;
    findJobCondition.createdTime = job.created_at;
    return jobsDao.findAJob(findJobCondition)
        .then(foundJob => {
            console.log("foundJob", foundJob)
            let newJob = {};
            if (foundJob.length === 0) {
                console.log("if");
                jobsDao.countJobs()
                    .then(() => {
                        newJob = {
                            jobId: job.id,
                            userId: uid,
                            company: job.company,
                            createdTime: job.created_at,
                            title: job.title,
                            note: job.note,
                        }
                        usersDao.addJobToUser(uid, newJob.jobId);
                        return jobsDao.createJob(newJob);
                    })
            }
            else {
                console.log("else");
                if (foundJob[0].userId.find(element => uid === element) !== undefined) {
                    console.log("else if");
                    return "403";
                } else {
                    console.log("else else");
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