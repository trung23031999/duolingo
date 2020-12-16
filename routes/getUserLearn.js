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
    if (score){
        var id = Number(title.charAt(title.length-1)) * level;
        console.log(id);
        var currentUser = await UserScore.find({username : username, "allScore.id" : id});
        console.log(currentUser);
        var diffScore = score - currentUser[0].allScore[id-1].score;
    }
    
    if (diffScore > 0){
        console.log("pass");
        var title = req.body.title;
        var result = await UserLearn.findOneAndUpdate({username : username}, { $inc : {"learn.$[elem].currentLevel" : 1}}, {arrayFilters : [{"elem.title" : title}], new : true});
        var resultScore = await UserScore.findOneAndUpdate({username : username}, {$set : {"allScore.$[elem1].score" : score}}, {arrayFilters : [{"elem1.id" : id}], new : true}, async(req,res)=>{
            await UserScore.findOneAndUpdate({username : username},{ $inc : {"totalScore" : diffScore}, new : true});
            var newUser = await UserScore.find({username : username, "allScore.id" : id}); 
            console.log(newUser[0].allScore[id-1].score);
            console.log(newUser[0].totalScore);
        });
        
    } else {
        console.log("title rong")
        var result = await UserLearn.findOne({username : username});
    }
    var finalUserScore = await UserScore.find({username : username});
   
    var scoreboard = await UserScore.find().sort({totalScore : -1}).limit(5);
    res.json({
        // updateScore : resultScore,
        learn : result,
        board : scoreboard
    });
});

module.exports = router;