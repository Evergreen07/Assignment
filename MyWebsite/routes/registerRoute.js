const express = require("express");
const router = express.Router();
const User = require('../models/registerModel');

// router.get('/', (req, res) => {
//     res.send("Server is up and running !!!")
// });

router.post('/', async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const newUser = new User({
            name,
            email,
            password
        });
   
        const newUserHere = await newUser.save();
        res.status(200).json(newUserHere);
    } catch (error) {   
        res.status(500).json({message : error.message})
    }
})

router.get('/', (req, res) => {
    User.find()
    .then((users) => res.json(users));
})

module.exports = router;