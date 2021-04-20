const jobsDao = require('../daos/jobs-dao');
const fetch = require("node-fetch");


const testAPI = () => {
    let myHeaders = new fetch.Headers();
    // myHeaders.append("Authorization", "Bearer USKt3O-gORv2gdyeUPjMv5caAL3RWgEyXai4s6EErYIRJLo8DWfAiSD_kb0A4-Wka1wd7XIbhismPhEmeJmkugis-_DWsCzIOWtMbLLWIHL9KQpCuwdIPXY3oKN3YHYx");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("https://jobs.github.com/positions.json?description=python&full_time=true&location=sf", requestOptions);
}

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
    testAPI,
};