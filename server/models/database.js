const mongoose = require('mongoose');

const AppUsers = require('./users');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/budgetTracker', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Error!!!!');
        console.log(err);
    });
 