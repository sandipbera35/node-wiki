
const express = require('express');

const router = express.Router();



router.post('/addpage', function(req, res){
    let msg = "This Is PageController";
    res.send(msg);
});

module.exports = router;
