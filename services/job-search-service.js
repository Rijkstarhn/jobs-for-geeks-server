const fetch = require("node-fetch");

const GITJOBS_URL = "https://jobs.github.com/positions.json?";

const searchDefaultJobs = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(`${GITJOBS_URL}`, requestOptions);
}

const searchJob = (params) => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${GITJOBS_URL}description=${params.jobDescription}&full_time=${params.isFullTime}&location=${params.jobLocation}`, requestOptions);
}

const searchJobById = (param) => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`https://jobs.github.com/positions/${param.jobId}.json`, requestOptions);
}

module.exports = {
    searchDefaultJobs,
    searchJob,
    searchJobById,
};