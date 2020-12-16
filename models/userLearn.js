const mongoose = require('mongoose');

const fix1 = [
    {
        topic : "Cơ bản 1",
        title : "basic1",
        id : 1,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 1,
    },
    {
        topic : "Cơ bản 2",
        title : "basic2",
        id : 2,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 1,
    },
    {
        topic : "Cơ bản 3",
        title : "basic3",
        id : 3,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 2,
    },
    {
        topic : "Cơ bản 4",
        title : "basic4",
        id : 4,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 3,
    },
    {
        topic : "Cơ bản 5",
        title : "basic5",
        id : 5,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 3,
    },
    {
        topic : "Cơ bản 6",
        title : "basic6",
        id : 6,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 4,
    },
    {
        topic : "Cơ bản 7",
        title : "basic7",
        id : 7,
        currentLevel : 1,
        maxLevel : 3,
        image : "",
        row : 5,
    }
]

 


const userLearnSchema = mongoose.Schema({
    username : String,
    learn :  {type : [], default : fix1}
});

module.exports = mongoose.model('UserLearn', userLearnSchema);
