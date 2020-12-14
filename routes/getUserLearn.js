const express = require('express');
const router = express.Router();
const UserLearn = require('../models/userLearn');
const verify = require('./verifyToken');


//Get user's learn process
router.post('/', verify, async(req,res)=>{
    var username = req.body.username;
    if (req.body.title){
        console.log("title ko rong");
        var title = req.body.title;
        var result = await UserLearn.findOneAndUpdate({username : username}, { $inc : {"learn.$[elem].currentLevel" : 1}}, {arrayFilters : [{"elem.title" : title}], new : true});
    } else {
        console.log("title rong")
        var result = await UserLearn.findOne({username : username});
    }

   
    res.json(result);
});

module.exports = router;