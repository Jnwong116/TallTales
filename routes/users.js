const express = require("express");

const log = console.log;

const router = express.Router();
const { ObjectID } = require("mongodb");

const { User } = require("../models/user.model");

// Adds a User
/*
    {
        "username": <String>,
        "password": <String>,
        "icon": <String>
    }
*/
router.route("/register").post(async (req, res) => {
  // Checks if user exists already
  let curUser = await User.findOne({ username: req.body.username });

  if (curUser !== null) {
    res.status(400).json("Username taken already");
    return;
  }

  const newUser = new User(req.body);

  newUser
    .save()
    .then(() => res.send(newUser))
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Login User
/*
    {
        "username": <String>,
        "password": <String>
    }
*/
router.route("/login").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findByUsernamePassword(username, password)
    .then(() => res.send({ currentUser: username }))
    .catch(error => {
      res.status(400).send(error);
    });
});

// Gets all users
router.route("/").get((req, res) => {
  User.find()
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

  User.findOne({ username: user })
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

  User.findOneAndDelete({ username: user })
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

  curUser.admin = true;

  curUser
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

  curUser.admin = false;

  curUser
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Adds prompt to User
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

  curUser.prompts.push(req.body.start);

  curUser
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

  curUser.prompts.splice(req.body.index, 1);
  curUser
    .save()
    .then(result => {
      res.send({ start, result });
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

// Saves a story to User
/*
    {
        "story": <String>
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

  curUser.stories.push(req.body.story);

  curUser
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

  // Checks username not taken
  let newUser = await User.findOne({ username: req.body.username });

  if (newUser !== null) {
    res.status(400).send("Username already taken");
    return;
  }

  curUser.username = req.body.username;

  curUser
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

  curUser.password = req.body.password;

  curUser
    .save()
    .then(result => {
      res.send(result);
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

  curUser.icon = req.body.icon;

  curUser
    .save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
