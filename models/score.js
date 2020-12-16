const mongoose = require('mongoose');

// const levelScore = [
//     {
//         id : 1,
//         level : 1,
//         score : 0,
//     },
//     {
//         id : 2,
//         level : 2,
//         score : 0
//     },
//     {
//         id : 3,
//         level : 3,
//         score : 0
//     }
// ]

const learnScore = [
    {
        id : 1,
        title : "basic1",
        level : 1,
        score : 0
    },
    {
        id : 2,
        title : "basic1",
        level : 2,
        score : 0
    },
    {
        id : 3,
        title : "basic1",
        level : 3,
        score : 0
    },
    {
        id : 4,
        title : "basic2",
        level : 1,
        score : 0
    },
    {
        id : 5,
        title : "basic2",
        level : 2,
        score : 0
    },
    {
        id : 6,
        title : "basic2",
        level : 3,
        score : 0
    },
    {
        id : 7,
        title : "basic3",
        level : 1,
        score : 0
    },
    {
        id : 8,
        title : "basic3",
        level : 2,
        score : 0
    },
    {
        id : 9,
        title : "basic3",
        level : 3,
        score : 0
    },
    {
        id : 10,
        title : "basic4",
        level : 1,
        score : 0
    },
    {
        id : 11,
        title : "basic4",
        level : 2,
        score : 0
    },
    {
        id : 12,
        title : "basic4",
        level : 3,
        score : 0
    },
    {
        id : 13,
        title : "basic5",
        level : 1,
        score : 0
    },
    {
        id : 14,
        title : "basic5",
        level : 2,
        score : 0
    },
    {
        id : 15,
        title : "basic5",
        level : 3,
        score : 0
    },
    {
        id : 16,
        title : "basic6",
        level : 1,
        score : 0
    },
    {
        id : 17,
        title : "basic6",
        level : 2,
        score : 0
    },
    {
        id : 18,
        title : "basic6",
        level : 3,
        score : 0
    },
    {
        id : 19,
        title : "basic7",
        level : 1,
        score : 0
    },
    {
        id : 20,
        title : "basic7",
        level : 2,
        score : 0
    },
    {
        id : 21,
        title : "basic7",
        level : 3,
        score : 0
    },
]

const userScoreSchema = mongoose.Schema({
    username : String,
    allScore : {type : [], default : learnScore},
    totalScore : {type : Number, default : 0},
});

module.exports = mongoose.model('UserScore', userScoreSchema);