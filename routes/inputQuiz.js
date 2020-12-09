const express = require('express');
const router = express.Router();
const InputQ = require('../models/inputQuiz');

//Post input quiz 
router.post('/', async(req,res) =>{
    const inputq = new InputQ({
        topic : req.body.topic,
        lesson : req.body.lesson,
        type : req.body.type,
        question : req.body.question,
        answer : req.body.answer,
    });
    try {
        const saveInputQuiz = await inputq.save();
        res.json(saveInputQuiz).send(res.body);
    } catch (error) {
        res.json({message : error})
    }
})

module.exports = router;