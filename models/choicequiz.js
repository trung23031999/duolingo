const mongoose = require('mongoose');

const choicequizSchema = mongoose.Schema({
    topic : Number,
    lesson : Number,
    type : Number,
    question : String,
    choice1 : String,
    choice2 : String,
    choice3 : String,
    choice4 : String,
    answer : String,
});

module.exports = mongoose.model('Quiz', choicequizSchema);
