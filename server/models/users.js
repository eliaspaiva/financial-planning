const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nomeUsuario: String,
    email: String,
    senha: String,
});
 


export default User;
