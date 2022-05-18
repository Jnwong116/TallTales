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

    room.private = !room.private;

    return room;
}

const startRoom = (room) => {
    room.inProgress = true;

    return room;
}

const updateNumUsers = (room, users) => {
    room.users = users;

    return room;
}

const updateGenre = (room, genre) => {
    room.genre = genre;

    return room;
}

const updateHost = (room, host) => {
    room.host = host;

    return room;
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

