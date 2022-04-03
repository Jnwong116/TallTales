import { io } from "socket.io-client"
import ENV from "../../config.js";

const socket = io(ENV.api_host);
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
}

export const updateRoom = (app) => {
    socket.on("room-users", ({ room, users, rooms }) => {
        if (app.state.page === 4 || app.state.page === 2) { // User is on lobby page or dashboard
          users[0].host = true;
          socket.emit("change-host", users);
          app.setState({
            page: 2,
            users: users
          });
        }

        else {
            app.setState({ // Updates current state of users
                users: users
            })
        }
      });
}