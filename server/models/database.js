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
 