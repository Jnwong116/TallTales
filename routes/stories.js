const express = require("express")

const log = console.log

const router = express.Router();
const { ObjectID } = require('mongodb');

const { Genre, currStory } = require('../models/stories.model');

// Adds a Genre/Start
/*
    Expects a string for a start
    {
        "start": <String>
    }
    
*/
router.route('/genre/:genre').post(async (req, res) => {
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
        .then((result) => {
            res.send(result)
        })
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


// Gets specific Genre
router.route('/genre/:genre').get((req, res) => {
    const genre = req.params.genre;

    Genre.findOne({genre: genre})
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});


// Deletes a Genre
router.route('/genre/:genre/').delete((req, res) => {
    const genre = req.params.genre;

    Genre.findOneAndDelete({genre: genre})
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});


// Deletes a start
/*
    Expects index of start
    {
        "index": <Number>
    }
*/
router.route('/genre/:genre/starts').delete(async (req, res) => {
    const genre = req.params.genre;

    let curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        res.status(404).send('Resource not found');
        return;
    }

    const start = curGenre.starts[req.body.index];

    curGenre.starts.splice(req.body.index, 1);
    curGenre.save()
        .then((result) => {
            res.send({start, result});
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});

/*
------------------------------------------- Prompts
*/


// Adds prompt to Genre
/*
    Expects a prompt object
    {
        "backstory": [<String>],
        "conflict": [<String>],
        "resolution": [<String>]
    }
*/
router.route('/prompt/:genre').post(async (req, res) => {
    const genre = req.params.genre;

    let curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        res.status(404).send('Resource not found');
        return;
    }

    curGenre.prompts.push(req.body);

    curGenre.save()
        .then((result) => {
            res.send(result)
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});


// Gets all prompts for a Genre
router.route('/prompt/:genre').get(async (req, res) => {
    const genre = req.params.genre;

    let curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        res.status(404).send('Resource not found');
        return;
    }

    res.send(curGenre.prompts);
})


// Deletes a prompt
/*
    Expects promptID
    {
        "prompt_id": <String>
    }
*/
router.route('/prompt/:genre/').delete(async (req, res) => {
    const genre = req.params.genre;
    const prompt_id = req.body.prompt_id

    let curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        res.status(404).send('Resource not found');
        return;
    }

    const prompts = curGenre.prompts;

    for (let i = 0; i < prompts.length; i++) {
        if (prompts[i].id === prompt_id) {
            const prompt = prompts[i];
            curGenre.prompts.splice(i, 1);
            curGenre.save()
                .then((result) => {
                    res.send({prompt, result});
                })
                .catch(err => {
                    res.status(400).json('Error: ' + err);
                });
            return;
        }
    }
});



/*
---------------------------------------------- CurrStory
*/


// Gets currStory
router.route('/story').get((req, res) => {
    currStory.find()
        .then((story) => {
            res.json(story);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        });
});


// Starts the currStory
/*
    Expects a start to the story
    {
        "start": <String>
    }
*/
router.route('/start').post(async (req, res) => {
    // Checks if theres a currStory in the DB already

    let curStory = await currStory.findOne();
    if (curStory === null) { // None exists
        curStory = new currStory(req.body);
    }

    else { // Resets currStory
        curStory.start = req.body.start;
        curStory.story = req.body.start;
        curStory.contributions = [];
    }

    curStory.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        });
})


// Adds contribution to the story
/*
    {
        "username": <String>,
        "sentence": <String>
    }
*/
router.route('/contribute').post(async (req, res) => {
    const curStory = await currStory.findOne();

    // Checks to make sure it exists
    if (curStory === null) {
        res.status(404).send('Resource not found');
        return;
    }
    
    const contribution = {
        username: req.body.username,
        sentence: req.body.sentence
    }

    // Adds contribution
    curStory.contributions.push(contribution);
    curStory.story = curStory.story + " " + contribution.sentence;

    curStory.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
});

module.exports = router;