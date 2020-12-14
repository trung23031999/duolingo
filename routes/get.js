const express = require('express');
const router = express.Router();
const QuizList = require('../models/(remove)imageQuiz');
// const testQuiz = require('../models/inputQuiz(remove)')
const verify = require('./verifyToken');
const jsonMerger = require("json-merger")

//Get quiz
router.post('/:topic/:lesson', verify, async(req, res)=>{
    var topic = req.params.topic;
    console.log(topic);
    var lesson = req.params.lesson;
    console.log(lesson);
    var questions = await QuizList.find({topic : topic, lesson : lesson});
    var object1 = {"type" : topic, "currentLevel" : lesson, "targetScore" : 30, "maxScore" : 60, "maxLevel" : 3, questions};
    res.json(object1);
});

module.exports = router;