const usersDao = require('../daos/users-dao');

const findAllUsers = () => usersDao.findAllUsers();

const findUserById = (uid) => usersDao.findUserById(uid);

const register = (userDetails) => {
    const username = userDetails.username;
    const password = userDetails.password;
    const role = userDetails.role;
    const user = {username, password, role};

    return usersDao.findUsername(username)
        .then(existingUser => {
            if (existingUser) {
                return 403
            } else {
                return usersDao.createUser(user)
            }
        });

};

const login = (userCredentials) => {
    const username = userCredentials.username;
    const password = userCredentials.password;

    return usersDao.findUserLogin(username, password)
        .then(user => {
            if (user) {
                return user
            } else {
                return 403
            }
        })
};

const updateUser = (uid, user) => usersDao.updateUser(uid, user);

module.exports = { findAllUsers, findUserById, register, login, updateUser };