const express = require("express");
const { createGenre, editStartTitle, getGenres, getStarts, deleteGenre, addPrompt } = require("../api_functions/stories.functions");
const { deleteStart } = require("../api_functions/users.function");

const log = console.log

const router = express.Router();

const { Genre, Story } = require('../models/stories.model');

// Adds a Genre/Start
/*
    Expects a string for a start
    {
        "start": <String>
    }
    
*/
router.route('/genre/:genre').post(async (req, res) => {
    const genre = req.params.genre;

    createGenre(genre, req.body.start)
    .save()
        .then((result) => {
            res.send(result)
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});


// Edits title of start for Genre
/*
  "title": <String>
*/
router.route("/genre/:genre/:start").post(async (req, res) => {
    const genre = req.params.genre;
    const start = req.params.start;
  
    let curGenre = await Genre.findOne({ genre: genre });
    let curStart = null;
  
    // Checks to make sure it exists
    if (curGenre === null) {
      res.status(404).send("Genre not found");
      return;
    }
  
    const newGenre = await editStartTitle(curGenre, start, req.body.title)
        .catch(err => {
            res.status(400).json("Error: " + err);
        });

    if (newGenre === undefined) {
        return;
    }

    newGenre
    .save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.status(400).json("Error: " + err);
      });
  });


// Gets all Genres
router.route('/').get((req, res) => {
    getGenres()
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

    getGenre(genre)
        .then((result) => {
            if (!result) {
                res.status(404).send('Genre not found');
                return;
            }
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});


// Gets all starts for a Genre
router.route('/genre/:genre/starts').get(async (req, res) => {
    const genre = req.params.genre;

    let curGenre = await getStarts(genre);

    // Checks to make sure it exists
    if (curGenre === null) {
        res.status(404).send('Genre not found');
        return;
    }

    res.send(curGenre.starts);
})

// Deletes a Genre
router.route('/genre/:genre/').delete((req, res) => {
    const genre = req.params.genre;

    deleteGenre(genre)
        .then((result) => {
            if (!result) {
                res.status(404).send('Genre not found');
                return;
            }
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
        res.status(404).send('Genre not found');
        return;
    }

    const start = curGenre.starts[req.body.index];

    deleteStart(curGenre, req.body.index)
    .save()
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
        res.status(404).send('Genre not found');
        return;
    }

    addPrompt(curGenre, req.body)
    .save()
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
        res.status(404).send('Genre not found');
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
        res.status(404).send('Genre not found');
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
    res.status(404).send('Prompt not found');
});



/*
---------------------------------------------- Story
*/


// Gets Story
router.route('/story/:story').get((req, res) => {
    const story = req.params.story;

    Story.findById(story)
        .then((story) => {
            if (!story) {
                res.status(404).send('Story not found');
                return;
            }
            res.json(story);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        });
});


// Creates a new Story
/*
    {
        "title": <String>,
        "start": <String>,
        "story": <String>,
        "contributions": [
            {
                "username": <String>,
                "sentence": <String>,
            }
        ],
        "userScores": [
            {   
                "username": <String>,
                "score": <Number>,
                "icon", <String>
            }
        ]
    }
*/
router.route('/start').post(async (req, res) => {
    const story = new Story(req.body);

    story.save()
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
router.route('/contribute/:story').post(async (req, res) => {
    const story = req.params.story;
    const curStory = await Story.findById(story);

    // Checks to make sure it exists
    if (curStory === null) {
        res.status(404).send('Story not found');
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