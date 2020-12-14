// const mongoose = require('mongoose');

// const inputquizSchema = mongoose.Schema({
//     topic : Number,
//     lesson : Number,
//     type : Number,
//     question : String,
//     answer : String,
// });

// // module.exports = mongoose.model('Imagequiz', inputquizSchema);

// const mongoose = require('mongoose');

// const imagequizSchema = mongoose.Schema({
//     topic : String,
//     level : Number,
//     id : Number,
//     type : {type : String, default : "imageChoice"},
//     score : {type : Number, default : 10},
//     title : String,
//     answer : [
//         {
//             image : String,
//             title : String,
//             isCorrect : Boolean,
//             tts : String,
//         },
//         {
//             image : String,
//             title : String,
//             isCorrect : Boolean,
//             tts : String,
//         },
//         {
//             image : String,
//             title : String,
//             isCorrect : Boolean,
//             tts : String,
//         }
//     ]
// });

// module.exports = mongoose.model('Quiz', imagequizSchema);