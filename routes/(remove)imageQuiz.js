// const express = require('express');
// const router = express.Router();
// const Img = require('../models/(remove)imageQuiz');

// //Post quiz
// router.post('/', async(req, res) =>{
//     //Create new quiz
//     const img = new Img({
//         topic : req.body.topic,
//         lesson : req.body.lesson,
//         type : req.body.type,
//         question : req.body.question,
//         choice1 : req.body.choice1,
//         choice2 : req.body.choice2,
//         choice3 : req.body.choice3,
//         chocie4 : req.body.chocie4,
//         answer : req.body.answer,
//     });
//     try {
//         const saveQuiz = await img.save();
//         res.json(saveQuiz).send(res.body);
//     } catch (error) {
//         res.json({message : error})
//     }
// })

// module.exports = router;