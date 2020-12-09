const express = require('express');
const router = express.Router();
const QuizList = require('../models/imageQuiz');

//Get quiz
router.get('/:topic/:lesson', async(req, res)=>{
    var topic = req.params.topic;
    console.log(topic);
    var lesson = req.params.lesson;
    console.log(lesson);
    var result = await QuizList.find({topic : topic, lesson : lesson});
    res.json(result);
});

module.exports = router;