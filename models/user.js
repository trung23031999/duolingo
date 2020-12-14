const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    name : String,
    score : {type : Number, default : 0},
});

module.exports = mongoose.model('User', userSchema);