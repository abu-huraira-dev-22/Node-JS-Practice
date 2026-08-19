const mongoose= require("mongoose");


const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  profession:{
    type:String,
    // required:true
  },
  age:{
    type:Number,
    required: true,
    min:18
  }
  
});

const Users = mongoose.model('Users', UserSchema)

module.exports =Users