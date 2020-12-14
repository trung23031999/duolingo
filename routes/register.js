const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Learn = require('../models/userLearn')
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation');
const multer = require('multer');
const fileroot = require('app-root-path');

//Register
router.post('/', async(req, res) =>{
    //Validate data
    //check syntax login
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if username was exist
    const usernameExist = await User.findOne({username : req.body.username});
    if (usernameExist) return res.status(400).send("Username was used. Please use other username!");

    //Hash password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new Learn process
    const learnProcess = new Learn({
        username : req.body.username,
    });

    //Create new User
    const user = new User({
        username : req.body.username,
        password : hashedPassword,
        name : req.body.name,
    });
    try {
        const saveUser = await user.save();
        const saveLearn = await learnProcess.save();
        res.json(saveLearn).send(res.body);
    } catch (error) {
        res.json({message : error})
    }
})

module.exports = router;