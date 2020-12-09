const express = require('express');
const app = express();
const mongoose = require('mongoose');
const login = require('./routes/login');
const register = require('./routes/register');
const imgquiz = require('./routes/imageQuiz');
const choicequiz = require('./routes/choiceQuiz');
const inputquiz = require('./routes/inputQuiz')
// const choicequiz = require('./routes/choicequiz');
const getquiz = require('./routes/get')
const server = require('http').Server(app);
const cors = require('cors');
require('dotenv/config');

//Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://trung23031999:izggzgzzz1@cluster0-g6swt.mongodb.net/cnweb?retryWrites=true&w=majority',
    { useNewUrlParser : true,
      useUnifiedTopology : true});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error');
    console.error(err);
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.static('uploads'));
app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Welcome');
})
//Routes Middlewares
app.use('/register', register);
app.use('/login', login);
app.use('/imgquiz', imgquiz);
app.use('/choicequiz', choicequiz);
app.use('/inputquiz', inputquiz);
app.use('/get', getquiz);

app.listen(4000, () => console.log('Server is listening on port 4000'));

