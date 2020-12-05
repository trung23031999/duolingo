const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {loginValidation} = require('../validation');


//Login
router.post('/', async(req, res) =>{
    //check syntax login
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check if username exists
    const user = await User.findOne({username : req.body.username});
    if (!user) return res.status(400).send("Invalid Username");

    //check password 
    const pass = await  bcrypt.compare(req.body.password, user.password);
    if (!pass) return res.status(400).send("Wrong password");

    //Create and assign a token
    const token = jwt.sign({id : user._id}, "qwertyui");

    res.header('user-token', token).send(token);
});

module.exports = router;