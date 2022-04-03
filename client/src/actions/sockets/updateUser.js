import { io } from "socket.io-client"
import ENV from "../../config.js";

const socket = io(ENV.api_host);
// const log = console.log;

export const makeRaconteur = (users) => {
    socket.emit("update-raconteur", {
        room: users[0].room,
        users: users
    });
}