const { updateNumUsers } = require("../api_functions/rooms.functions");
const { getRoomUsers, userJoin, getCurrentUser, updateRaconteur, userLeave, allUsersInput, saveInput } = require("./socket_helper");

let users = [];
let rooms = {
    main: false
};


module.exports = (io, socket) => {

    // Join user to room
    socket.on("join-room", ({ user, room }) => {
        if (!rooms[room] && getRoomUsers(room).length < 5) { // Checks if game is in progress or if game lobby already has 5 players
            const currUser = userJoin(
                socket.id,
                user.username,
                user.icon,
                user.score,
                user.raconteur,
                user.currentSentence,
                user.host,
                room
            );

            socket.join(currUser.room);
            
            updateNumUsers()

            io.to(currUser.room).emit("update-users", {
                users: getRoomUsers(currUser.room),
                room: currUser.room
            });

            io.emit("update-db", {
                users: getRoomUsers(currUser.room),
                room: currUser.room
            })
        } else {
            if (rooms[room]) { // If game is in progress
                socket.emit("deny-room-access", "Room in Progress!");
            }
            else { // If room is full
                socket.emit("deny-room-access", "Room is full!");
            }
        }
    });


    socket.on("change-host", changedUsers => {
        users = changedUsers;
    });
}