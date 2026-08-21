const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        required:true,
        unique: true,
        type: String
    },
    password:{
        required: true,
        type:String,
        minLength:8
    },
    userName:{
        required:true,
        unique: true,
        type: String
    }
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users