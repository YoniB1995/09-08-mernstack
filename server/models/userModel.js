const Schema = require('mongoose').Schema;
const mongoose = require('mongoose')

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('user',UserSchema);