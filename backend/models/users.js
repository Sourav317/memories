const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    fullName : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    email : {
        type : String,
        unique : true,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('mytable',User_Schema);