const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        require:true,
        unique: true,
        type: String
    },
    password:{
        require: true,
        type:String
    },
    userName:{
        require:true,
        unique: true,
        type: String
    }
})

const Users = mongoose.Model('Users', UserSchema)

module.exports = Users