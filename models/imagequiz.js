const mongoose = require('mongoose');

const imagequizSchema = mongoose.Schema({
    topic : Number,
    lesson : Number,
    type : Number,
    question : String,
    choice : String,
    answer : String,
    image : String,
});

module.exports = mongoose.model('Quiz', imagequizSchema);