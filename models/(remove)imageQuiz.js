const mongoose = require('mongoose');

const imagequizSchema = mongoose.Schema({
    topic : String,
    level : Number,
    id : Number,
    type : {type : String, default : "imageChoice"},
    score : {type : Number, default : 10},
    title : String,
    answer : [
        {
            image : String,
            title : String,
            isCorrect : Boolean,
            tts : String,
        },
        {
            image : String,
            title : String,
            isCorrect : Boolean,
            tts : String,
        },
        {
            image : String,
            title : String,
            isCorrect : Boolean,
            tts : String,
        }
    ]
});

module.exports = mongoose.model('Quiz', imagequizSchema);