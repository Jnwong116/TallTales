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

module.exports = router;