const { hash } = require('bcrypt');
const mongoose = require('mongoose');

const appUsersSchema = mongoose.Schema({
    username: String,
    email: String,
    hash: String,
    salt: String,
});