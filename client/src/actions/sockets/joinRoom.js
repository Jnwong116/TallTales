import { socket } from "./socket";
// const log = console.log;

export const joinRoom = (user, room) => {
    socket.emit("join-room", {
        user: {
            username: user.username,
            icon: user.icon,
            score: 0,
            raconteur: false,
            currentSentence: ". . .",
            host: false
        },
        room: room
    });
};

export const updateRoom = (app) => {
    socket.on("update-users", ({ room, users, rooms }) => {
        if (app.state.page === "dashboard") {
            // User is on dashboard
            users[0].host = true;
            socket.emit("change-host", users);
            app.setState({
                page: "lobby",
                users: users
            });
        } 
        else if (app.state.page === "lobby") {
            // User is on lobby page
            users[0].host = true;
            socket.emit("change-host", users);
            app.setState({
                users: users
            });
        }
        else {
            app.setState({
                // Updates current state of users
                users: users
            });
        }
    });
};