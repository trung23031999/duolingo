const mongoose = require('mongoose');

const levelScore = [
    {
        id : 1,
        level : 1,
        score : 0,
    },
    {
        id : 2,
        level : 2,
        score : 0
    },
    {
        id : 3,
        level : 3,
        score : 0
    }
]

const learnScore = [
    {
        id : 1,
        title : "basic1",
        titleScore : levelScore,
    },
    {
        id : 2,
        title : "basic2",
        titleScore : levelScore,
    },
    {
        id : 3,
        title : "basic3",
        titleScore : levelScore,
    },
    {
        id : 4,
        title : "basic4",
        titleScore : levelScore,
    },
    {
        id : 5,
        title : "basic5",
        titleScore : levelScore,
    },
    {
        id : 6,
        title : "basic6",
        titleScore : levelScore,
    },
    {
        id : 7,
        title : "basic7",
        titleScore : levelScore,
    }
]

const userScoreSchema = mongoose.Schema({
    username : String,
    allScore : {type : [], default : learnScore},
    totalScore : {type : Number, default : 0},
});

module.exports = mongoose.model('UserScore', userScoreSchema);