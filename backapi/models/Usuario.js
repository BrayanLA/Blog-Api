const mongoose = require('mongoose');
const usuarioSchema = mongoose.Schema({
    nombre: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    fechaDeCreacion:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema)