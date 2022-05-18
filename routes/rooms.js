const express = require("express");
const { createRoom, deleteRoom, lockRoom, startRoom, updateNumUsers, updateGenre, updateHost, getRoom, getRooms } = require("../api_functions/rooms.functions");

const log = console.log

const router = express.Router();

const { Room } = require('../models/stories.model');


// Creates a room
/*{
    "code": <String>,
    "host": <String>,
    "users" <Number>
}
*/
router.route('/create').post(async (req, res) => {
    createRoom(req.body)
    .save()
    .then((result) => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).json('Error: ' + err);
    });
});


// Delete room
router.route('/delete/:room').delete(async (req, res) => {
    const room = req.params.room;

    deleteRoom(room)
        .then((result) => {
            if (!result) {
                res.status(404).send('Room not found');
                return;
            }
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
});


// Make Room Private/Public
router.route('/lock/:room').post(async (req, res) => {
    const room = req.params.room;

    const newRoom = await lockRoom(room)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newRoom === undefined) {
        return;
    }

    newRoom
    .save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
})


// Make Room in Progress
router.route('/start/:room').post(async (req, res) => {
    const room = req.params.room;

    const newRoom = await startRoom(room)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newRoom === undefined) {
        return;
    }

    newRoom
    .save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
})


// Edits number of users in room
/*
    {
        "users": <Number>
    }
*/
router.route('/join/:room').post(async (req, res) => {
    const room = req.params.room;

    const newRoom = await updateNumUsers(room, req.body.users)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newRoom === undefined) {
        return;
    }

    newRoom
    .save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
})


// Change genre for a Room
/*{
    "genre": <String>
    }
*/
router.route('/genre/:room').post(async (req, res) => {
    const room = req.params.room;

    const newRoom = await updateGenre(room, req.body.genre)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newRoom === undefined) {
        return;
    }

    newRoom
    .save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
})


// Change host for a Room
/*{
    "host": <String>
    }
*/
router.route('/host/:room').post(async (req, res) => {
    const room = req.params.room;

    const newRoom = await updateHost(room, req.body.host)
        .catch(err => {
            res.status(404).send(err);
        });

    if (newRoom === undefined) {
        return;
    }

    newRoom
    .save()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).json('Error: ' + err);
        });
})


// Get Room
router.route('/room/:room').get(async (req, res) => {
    const room = req.params.room;

    const curRoom = await getRoom(room);

    // Checks to make sure it exists
    if (curRoom === null) {
        res.status(404).send('Room not found');
        return;
    }

    res.send(curRoom);
})


// Get All Rooms
router.route('/').get(async (req, res) => {
    getRooms()
    .then((rooms) => {
        res.json(rooms);
    })
    .catch(err => {
        res.status(400).json('Error: ' + err);
    });
})

module.exports = router;