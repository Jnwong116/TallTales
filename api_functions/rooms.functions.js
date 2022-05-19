const log = console.log;

const { Room } = require('../models/stories.model');

const createRoom = (roomInfo) => {
    const room = new Room(roomInfo);

    return room;
}

const deleteRoom = (roomCode) => {
    return Room.findOneAndDelete({ code: roomCode });
}

const lockRoom = async (room) => {
    // Sets room to either public/private depending on what it was before
    const curRoom = await Room.findOne({ code: room });

    // Checks to make sure it exists
    if (curRoom === null) {
        throw 'Room not found';
    }

    curRoom.private = !curRoom.private;

    return curRoom;
}

const startRoom = async (room) => {
    const curRoom = await Room.findOne({ code: room });

    // Checks to make sure it exists
    if (curRoom === null) {
        throw 'Room not found';
    }

    curRoom.inProgress = true;

    return curRoom;
}

const updateNumUsers = async (room, users) => {
    const curRoom = await Room.findOne({ code: room });

    // Checks to make sure it exists
    if (curRoom === null) {
        throw 'Room not found';
    }

    curRoom.users = users;

    return curRoom;
}

const updateGenre = async (room, genre) => {
    const curRoom = await Room.findOne({ code: room });

    // Checks to make sure it exists
    if (curRoom === null) {
        throw 'Room not found';
    }

    curRoom.genre = genre;

    return curRoom;
}

const updateHost = async (room, host) => {
    const curRoom = await Room.findOne({ code: room });

    // Checks to make sure it exists
    if (curRoom === null) {
        throw 'Room not found';
    }

    curRoom.host = host;

    return curRoom;
}

const getRoom = (room) => {
    return Room.findOne({ code: room });
}

const getRooms = () => {
    return Room.find({
        'inProgress': false
    })
}

module.exports = { createRoom, deleteRoom, lockRoom, startRoom, updateNumUsers, updateGenre, updateHost, getRoom, getRooms }

