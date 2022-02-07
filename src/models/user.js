const mongoose = require('mongoose');

const User = mongoose.model('User',{
    uname : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    pswd :{
        type:String,
        minLength:8,
        required:true
    }
})


module.exports =User