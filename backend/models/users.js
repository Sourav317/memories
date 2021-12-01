const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('mytable',User_Schema);