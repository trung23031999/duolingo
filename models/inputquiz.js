const mongoose = require('mongoose');

const inputquizSchema = mongoose.Schema({
    topic : Number,
    lesson : Number,
    type : Number,
    question : String,
    answer : String,
});

module.exports = mongoose.model('Quiz', inputquizSchema);