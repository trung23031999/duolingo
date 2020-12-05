const mongoose = require('mongoose');

const choicequizSchema = mongoose.Schema({
    topic : Number,
    lesson : Number,
    type : Number,
    question : String,
    choice : String,
    answer : String,
});

module.exports = mongoose.model('Quiz', choicequizSchema);