const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/teste', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Error!!!!');
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('AppUser', userSchema);

const userOne = new User({
    username: 'kingjames',
    email: 'elias@gmail.com',
    password: 'teste',
});

const userTwo = new User({
    username: 'teste2',
    email: 'teste2@gmail.com',
    password: 'teste22',
});

userOne.save().then(userOne => {
    console.log(userOne);
}).catch(e => {
    console.log(e);
});

userTwo.save().then(userTwo => {
    console.log(userTwo);
}).catch(e => {
    console.log(e);
});

 