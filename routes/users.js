const express = require("express")

const log = console.log

const router = express.Router();
const { ObjectID } = require('mongodb');

const { User } = require('../models/user.model');

// Adds a User
router.route('/register').post((req, res) => {
    const newUser = new User(req.body)

    newUser.save()
        .then(() => res.send(newUser))
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});

// Gets all users
router.route('/').get((req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        });
});

// Login User
/*
    {
        "username": <String>,
        "password": <String>
    }
*/
router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username })
    .then()
})

module.exports = router;