
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



router.post('/addpage', function(req, res){
    let msg = "This Is PageController";
    res.send(msg);
});

module.exports = router;
