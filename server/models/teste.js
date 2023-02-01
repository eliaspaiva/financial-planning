import mongoose from 'mongoose';
import AppUsers from './users';

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/budgetTracker', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection Open!');
    })
    .catch(err => {
        console.log('Error!!!!');
        console.log(err);
    });
 
const user1 = new AppUsers({
    username: 'Teste',
    email: 'Teste',
    hash: 'Teste',
    salt: 'Teste',
});

user1.save().then(user1 => {
    console.log(user1);
}).catch(e => {
    console.log(e);
});

