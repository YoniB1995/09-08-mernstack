const Schema = require('mongoose').Schema;


const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('User',UserSchema);