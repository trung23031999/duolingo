const express = require('express');
const router = express.Router();
const UserLearn = require('../models/userLearn');
const UserScore = require('../models/score');
const verify = require('./verifyToken');


//Get user's learn process
router.post('/', verify, async(req,res)=>{
    var username = req.body.username;
    var score = req.body.score;
    var title = req.body.title;
    var level = req.body.level;
    var id = req.body.level;
    if (req.body.score >= 30){
        console.log("pass");
        var title = req.body.title;
        var result = await UserLearn.findOneAndUpdate({username : username}, { $inc : {"learn.$[elem].currentLevel" : 1}}, {arrayFilters : [{"elem.title" : title}], new : true});
        var resultScore = await UserScore.findOneAndUpdate({username : username}, {$set : {"allScore.$[elem1].$[title].$[elem2]" : score}}, {arrayFilters : [{"elem1.title" : title}, {"elem2.level" : level}], new : true});
    } else {
        console.log("title rong")
        var result = await UserLearn.findOne({username : username});
    }

   
    res.json({
        learn : result,
        updateScore : resultScore,
    });
});

module.exports = router;