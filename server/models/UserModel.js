const mongoose = require('mongoose');

 
const UserSchema = mongoose.Schema({
    name : { 
      type:String ,
      required:true
    },
      username: { 
        type:String, 
        required:true 
      },
      password: { 
        type:String, 
        required:true 
      }
    });
  const Users = mongoose.model('user',UserSchema);
  module.exports = Users;