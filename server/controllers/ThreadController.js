
const express = require('express');

const router = express.Router();



router.post('/addthread', function(req, res){
    let msg = "This Is AddThread Controller";
    res.send(msg);
});

module.exports = router;
