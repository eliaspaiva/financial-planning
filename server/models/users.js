const mongoose = require('mongoose');

const appUsersSchema = mongoose.Schema({
    username: String,
    email: String,
    hash: String,
    salt: String,
});

const AppUsers = mongoose.model('User', appUsersSchema);

module.exports = AppUsers;