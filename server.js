// TODO: review https://expressjs.com/
const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const demos = require('./controllers/demo-controller');
demos(app);


require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)


app.listen(3000)