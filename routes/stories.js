const express = require("express");
const { createGenre, editStartTitle, getGenres, deleteGenre, addPrompt, getPrompts, deletePrompt, getStory, createStory, addContribution, getGenre, deleteStart } = require("../api_functions/stories.functions");

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
  
    const newGenre = await editStartTitle(genre, start, req.body.title)
        .catch(err => {
            res.status(404).send(err);
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

    const curGenre = await getGenre(genre);

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

    const newGenre = await deleteStart(genre, req.body.index)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newGenre === undefined) {
        return;
    }

    newGenre
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

    const newGenre = await addPrompt(genre, req.body)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newGenre === undefined) {
        return;
    }

    newGenre
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

    const curGenre = await getPrompts(genre)
        .catch(err => {
            res.status(404).send(err);
        });

    if (curGenre === undefined) {
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

    const newGenre = await deletePrompt(genre, prompt_id)
        .catch(err => {
            res.status(404).send(err);
        });

    
    if (newGenre === undefined) {
        return;
    }

    newGenre
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});



/*
---------------------------------------------- Story
*/


// Gets Story
router.route('/story/:story').get((req, res) => {
    const story = req.params.story;

    getStory(story)
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
    createStory(req.body)
        .save()
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
    
    const contribution = {
        username: req.body.username,
        sentence: req.body.sentence
    }

    const newStory = await addContribution(contribution, story)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newStory === undefined) {
        return;
    }

    newStory
        .save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).json('Error: ' + err);
        })
});

module.exports = router;