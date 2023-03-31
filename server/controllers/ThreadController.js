
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Thread } = require('../models/Threadmodel');

const db = require('../database/db')



const router = express.Router();



router.post('/addthread', function(req, res){
    let msg = "This Is AddThread Controller";
    const body = req.body;
    if (body.name == ""){
        res.send('you must enter a name');
    };
    const th = new Thread({
        name: body.name,
        rank: body.rank
        
    });
    
    th.save();
    res.json(th);
    // console.log(body);


});

router.get('/listthread', function(req, res){

    // res.send('listapi ')
    Thread.find()
    .then(function (users) {
        var usernames = [];
        users.forEach(element => {
            usernames.push(element);

            
      });

      res.json(usernames);
     
    })
    .catch(function (err) {
      console.log(err);
    });
});

    




module.exports = router;
