const express = require('express');
const router = express.Router();
const QuizList = require('../models/imagequiz');

//Get quiz
router.get('/:topic/:lesson', async(req, res)=>{
    var topic = req.params.topic;
    console.log(topic);
    var lesson = req.params.lesson;
    console.log(lesson);
    var result = await QuizList.find({topic : topic});
    res.json(result);
});

module.exports = router;