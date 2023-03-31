const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Users  = require('../models/UserModel');


const router = express.Router();


router.post('/addnewuser', function(req, res){
    // let msg = "This Is AddUser Controller";
    // res.send(msg);
    const body = req.body;
    if (body.name == ""){
        res.send('you must enter a name');
    };
    const user = new Users({
        name: body.name,
        username: body.username,
        password: body.password
        
    });
    
    user.save();
    res.json(user);
});

router.get('/get', function(req, res){
    var user = {};

    Users.find({}, function(err, user){

        res.json(user);

    });

    

});
module.exports = router;