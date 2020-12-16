const express = require('express');
const router = express.Router();
const QuizList = require('../models/quiz');
// const testQuiz = require('../models/inputQuiz(remove)')
const verify = require('./verifyToken');
const jsonMerger = require("json-merger")

//Get quiz
router.post('/', async(req, res)=>{
    var topic = req.body.topic;
    var level = req.body.level;
    var questions = await QuizList.find({topic : topic, level : level});
    var object1 = {"type" : topic, "currentLevel" : level, "targetScore" : 30, "maxScore" : 60, "maxLevel" : 3, questions};
    res.json(object1);
});

module.exports = router;