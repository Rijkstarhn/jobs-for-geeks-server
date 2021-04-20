const jobsService = require('../services/job-service');

module.exports = (app) => {
    app.get('/api/jobs', (req, res) =>
        jobsService.findAllJobs()
            .then(allJobs => res.send(allJobs)));

    app.get('/api/jobs/:jid', (req, res) =>
        jobsService.findJobById(req.params.jid)
            .then(job => res.send(job)));

    app.get('/api/users/:uid/jobs', (req, res) =>
        jobsService.findJobsForUser(req.params.uid)
            .then(jobs => res.send(jobs)));

    app.post('/api/users/:uid/jobs', (req, res) =>
        jobsService.createJobForUser(req.params.uid, req.body)
            .then(job => res.send(job)));

    app.delete('/api/jobs/:jid', (req, res) =>
        jobsService.deleteJob(req.params.jid)
            .then(job => res.send(job)));

    app.put('/api/jobs/:jid', (req, res) =>
        jobsService.updateJob(req.params.jid, req.body)
            .then(job => res.send(job)));

    app.get('/findRes/', (req, res) => {
        jobsService.testAPI()
            .then(response => response.json())
            .then(responseJson => res.send(responseJson))
            .catch(error => console.log('error', error));

            // .then(response => res.send(response.body))
    })
};