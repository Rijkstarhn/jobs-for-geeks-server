const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        role: String,
    }, {collection: 'user-test'});

module.exports = usersSchema;