const mongoose = require('mongoose');

const threadschema = mongoose.Schema({
  name : { 
    type:String ,
    required:true
  },
    rank : { 
      type:String, 
      required:false 
    }
  });
const Thread = mongoose.model('thread',threadschema);
  
 
module.exports.Thread= Thread;