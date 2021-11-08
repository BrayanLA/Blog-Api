const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    descrip: {
        type:String,
        require:true
    },
    write: {
        type:String,
        require:true
    },
    fechaDeCreacion:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Post', postSchema)