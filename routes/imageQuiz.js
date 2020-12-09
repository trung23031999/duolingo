const express = require('express');
const router = express.Router();
const Img = require('../models/imageQuiz');

//Post quiz
router.post('/', async(req, res) =>{
    //Create new quiz
    const img = new Img({
        topic : req.body.topic,
        lesson : req.body.lesson,
        type : req.body.type,
        question : req.body.question,
        choice : req.body.choice,
        answer : req.body.answer,
        image : req.body.image,
    });
    try {
        const saveQuiz = await img.save();
        res.json(saveQuiz).send(res.body);
    } catch (error) {
        res.json({message : error})
    }
})

module.exports = router;