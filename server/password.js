import bcrypt from 'bcrypt';

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
};

hashPassword();