const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('//mongoDBaddress');

const session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    proxy: true,
    cookie: { sameSite: 'none', secure: true }
}));


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

app.listen(process.env.PORT || 4000);