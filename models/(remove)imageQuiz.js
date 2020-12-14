const mongoose = require('mongoose');

const imagequizSchema = mongoose.Schema({
    topic : Number,
    lesson : Number,
    type : Number,
    question : String,
    answer : String,
});

module.exports = mongoose.model('Quiz', imagequizSchema);