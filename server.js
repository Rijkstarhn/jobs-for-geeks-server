const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webbew',
    {useNewUrlParser: true,
    useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    proxy: true,
    cookie: { sameSite: 'none', secure: true }
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


require('./controllers/users-controller')(app);
require('./controllers/jobs-controller')(app);

app.listen(process.env.PORT || 4000);