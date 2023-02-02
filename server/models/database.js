const mongoose = require('mongoose');
const User = require('./users');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Error!!!!');
        console.log(err);
    });



const userOne = new User({
    username: 'kingjames',
    email: 'elias@gmail.com',
    password: 'teste',
});

userOne.save().then(userOne => {
    console.log(userOne);
}).catch(e => {
    console.log(e);
});

 