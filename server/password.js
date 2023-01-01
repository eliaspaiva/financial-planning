import bcrypt from 'bcrypt';
import mongoose from 'mongoose';


const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
};

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('Great! You can login');
    } else {
        console.log('You cant login');
    }
};

hashPassword('elias');
login('elias', '$2b$10$sS8mpST7N6mEelUVoMA Ep.FmaVQymhH/5471LKhQSrvFVZxwGjP3K');


mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
