const express = require("express")

const log = console.log

const router = express.Router();
const { ObjectID } = require('mongodb');

const { Genre, currStory } = require('../models/stories.model');

// Adds a Genre 
/*
    Expects a string for a start
    {
        "start": <String>
    }
    
*/
router.route('/:genre').post(async (req, res) => {
    const genre = req.params.genre;

    // Checks if genre exists already
    let curGenre = await Genre.findOne({genre: genre});
    if (curGenre === null) { // None exists
        curGenre = new Genre({
            genre: genre,
            starts: []
        });
    }

    curGenre.starts.push(req.body.start);

    curGenre.save()
        .then((result) => res.send(result))
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});

// Gets all Genres
router.route('/').get((req, res) => {
    Genre.find()
        .then((genres) => {
            res.json(genres);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        });
});

module.exports = router;