const jobsDao = require('../daos/jobs-dao');
const fetch = require("node-fetch");

const GITJOBS_URL = "https://jobs.github.com/positions.json?";

const searchDefaultJobs = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://jobs.github.com/positions.json?", requestOptions);
}

const searchJob = (params) => {
    // console.log('url:', `${GITJOBS_URL}description=${params.jobDescription}&full_time=${params.isFullTime}&location=${params.jobLocation}`)
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${GITJOBS_URL}description=${params.jobDescription}&full_time=${params.isFullTime}&location=${params.jobLocation}`, requestOptions);
}

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
                    .then(num => {
                        newJob = {
                            jobId: num.toString(),
                            userId: uid,
                            company: job.company,
                            createdTime: job.createdTime,
                            title: job.title,
                            note: job.note,
                        }
                        return jobsDao.createJob(newJob);
                    })
            }
            else {
                if (foundJob[0].userId.find(element => uid === element) !== undefined) {
                    return null;
                } else {
                    return jobsDao.updateJobUser(foundJob[0]._id, uid);
                }
            }
        })
};

// const testAwait = (uid, job) => {
//
// }

const deleteJob = (jid) => jobsDao.deleteJob(jid);

const updateJob = (jid, job) => jobsDao.updateJob(jid, job);

module.exports = {
    findAllJobs: findAllJobs,
    findJobById: findJobById,
    findJobsForUser: findJobsForUser,
    createJobForUser: createJobForUser,
    deleteJob,
    updateJob,
    searchDefaultJobs,
    searchJob,
};