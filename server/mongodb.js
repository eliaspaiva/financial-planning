const mongoose = require ('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true })
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

 