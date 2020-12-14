// const express = require('express');
// const router = express.Router();
// const ChoiceQ = require('../models/(remove)imageQuiz');

// //Post choice quiz
// router.post('/', async(req, res) =>{
//     const choiceq = new ChoiceQ({
//         topic : req.body.topic,
//         lesson : req.body.lesson,
//         type : req.body.type,
//         question : req.body.question,
//         choice1 : req.body.choice1,
//         choice2 : req.body.choice2,
//         choice3 : req.body.choice3,
//         choice4 : req.body.choice4,
//         answer : req.body.answer,
//     });
//     try {
//         const saveChoiceQuiz = await choiceq.save();
//         res.json(saveChoiceQuiz).send(res.body);
//     } catch (error) {
//         res.json({message: error})
//     }
// })

// module.exports = router;