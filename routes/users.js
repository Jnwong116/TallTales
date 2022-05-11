const express = require("express");
const session = require("express-session");

const log = console.log;

const router = express.Router();

const { User } = require("../models/user.model");

const { addUser, login, getAllUsers, getUser, deleteUser, makeAdmin, makeNormal, updateUsername, updatePassword, updateAvatar, addStart, deleteStart, saveStory, editTitle, getStory } = require("../api_functions/users.function");

router.use(
  session({
    secret: "thisisasecretkeyasdfkl",
    resave: false,
    saveUninitialized: false,
  })
)

// Adds a User
/*
    {
        "username": <String>,
        "password": <String>,
        "icon": <String>
    }
*/
router.route('/register').post(async (req, res) => {
    // Checks if user exists already
    let curUser = await User.findOne({username: req.body.username});

    if (curUser !== null) {
        res.status(400).send('Username taken already');
        return;
    }

    addUser(req.body)
        .then((user) => {
          const ret = {
            username: user.username,
            icon: user.icon,
            stories: user.stories,
            prompts: user.prompts,
            admin: user.admin,
            _id: user._id,
            __v: user.__v
          }
          res.send(ret)
        })
        .catch(err => {
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

    login(username, password)
        .then(user => {
            // Add the user's id to the session
            req.session.userid = user._id;
            req.session.username = user.username;
            res.send({ currentUser: user.username });
        })
        .catch(error => {
            res.status(400).send(error);
        })
})

router.route('/logout').get((req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send();
        }
    });
})


// A route to check if a user is logged in on the session
router.route("/check-session").get((req, res) => {
    if (req.session.userid) {
        res.send({ currentUser: req.session.username });
    } else {
        res.status(401).send();
    }
});


// Gets all users
router.route("/").get((req, res) => {
  getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Gets specific User
router.route("/user/:username").get((req, res) => {
  const user = req.params.username;

  getUser(user)
    .then(result => {
      if (!result) {
        res.status(404).send("User not found");
        return;
      }
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Delete User
router.route("/user/:username").delete((req, res) => {
  const user = req.params.username;

  deleteUser(user)
    .then(result => {
      if (!result) {
        res.status(404).send("User not found");
        return;
      }
      const ret = {
        username: result.username,
        icon: result.icon,
        stories: result.stories,
        prompts: result.prompts,
        admin: result.admin,
        _id: result._id,
        __v: result.__v
      }
      res.send(ret);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

/*
------------------------------------ Updates User
*/

// Makes User admin
router.route("/admin/:username").post(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  makeAdmin(curUser)
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Make User not Admin
router.route("/admin/:username").delete(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  makeNormal(curUser)
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Update username
/*
    {
        "username": <String>
    }
*/
router.route("/edit/username/:username").post(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  const newUser = await updateUsername(curUser, req.body.username)
    .catch(err => {
      res.status(400).send(err);
    });
  
  if (newUser === undefined) {
    return;
  }

  newUser
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Update password
/*
    {
        "password": <String>
    }
*/
router.route("/edit/password/:username").post(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  updatePassword(curUser, req.body.password)
    .save()
    .then(user => {
      const ret = {
        username: user.username,
        icon: user.icon,
        stories: user.stories,
        prompts: user.prompts,
        admin: user.admin,
        _id: user._id,
        __v: user.__v
      }
      res.send(ret);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Update avatar
/*
    {
        "icon": <String>
    }
*/
router.route("/edit/avatar/:username").post(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  updateAvatar(curUser, req.body.icon)
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

/*
--------------------------------------------- Prompts
*/

// Adds start to User
/*
    {
        "start": <String>
    }
    
*/
router.route("/prompts/:username").post(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  addStart(curUser, req.body.start)
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Deletes a start from User
/*
    {
        "index": <Number>
    }
*/
router.route("/prompts/:username").delete(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  const start = curUser.prompts[req.body.index];

  deleteStart(curUser, req.body.index)
    .save()
    .then(result => {
      res.send({ start, result });
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

/*
--------------------------------------- Stories
*/

// Saves a story to User
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
router.route("/stories/:username").post(async (req, res) => {
  const user = req.params.username;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  saveStory(curUser, req.body)
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});


// Edits title of story for user
/*
  "title": <String>
*/
router.route("/stories/:username/:story").post(async (req, res) => {
  const user = req.params.username;
  const story = req.params.story;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  const newUser = await editTitle(curUser, story, req.body.title)
    .catch(err => {
      res.status(400).send(err);
    });

  if (newUser === undefined) {
    return;
  }

  newUser
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});


// Gets story from User
router.route("/stories/:username/:story").get(async (req, res) => {
  const user = req.params.username;
  const story = req.params.story;

  let curUser = await User.findOne({ username: user });

  // Checks to make sure it exists
  if (curUser === null) {
    res.status(404).send("User not found");
    return;
  }

  const storyRetrieved = await getStory(curUser, story)
    .catch(err => {
      res.status(400).send(err);
    })

  if (storyRetrieved === undefined) {
    return;
  }

  res.send(storyRetrieved);


});

module.exports = router;
