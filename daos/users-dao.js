const usersModel = require('../models/users/users-model');

const findAllUsers = () => usersModel.find();

const findUserById = (uid) => usersModel.findById(uid);

const addUser = (user) => usersModel.create(user);

const findUserLogin = (username, password) => usersModel.findOne({username: username, password: password});

const findUsername = (username) => usersModel.findOne({username: username});

const createUser = (user) => usersModel.create(user);

const updateUser = (uid, user) => usersModel.updateOne({_id: uid},
    {$set: user});

const addJobToUser = (name, jobName) => {
    // Do care the updateOne will return a query, if you don't exec it, it will not update data!!!
    // console.log("hhh", usersModel.updateOne({username: name}, {$push: {jobs: jobName}}));
    usersModel.updateOne({username: name}, {$push: {jobs: jobName}})
        .catch(error => console.log(error));
}

module.exports = {
    findAllUsers,
    findUserById,
    addUser,
    findUserLogin,
    findUsername,
    createUser,
    updateUser,
    addJobToUser
};