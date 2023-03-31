const mongoose = require('mongoose');

require('dotenv').config();


mongoose.connect("mongodb+srv://sandipbera35:12131213@cluster0.wkgpauy.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
.catch(error => console.error('Error In database Connection'));
    
   



module.exports = mongoose;