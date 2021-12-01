const mongoose = require('mongoose');

const Post_Schema = new mongoose.Schema({
    Creator : {
        type : String,
        required : true
    },
    Title : {
        type : String
    },
    Tags : {
        type : [String],
        required : true
    },
    SelectedFile : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Posts',Post_Schema);