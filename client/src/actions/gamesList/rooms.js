import ENV from './../../config.js';
import { errorToast } from "../../actions/toastify/toastify.js";
import { joinRoom } from '../sockets/room.js';

const API_HOST = ENV.api_host;
const log = console.log

function parseRooms(rooms) {
    const newRooms = [];
    for (let i = 0; i < rooms.length; i++) {
        newRooms.push({
            id: i,
            host: rooms[i].host,
            players: `${rooms[i].users}/5`,
            genre: rooms[i].genre,
            roomcode: rooms[i].code
        });
    }

    return newRooms;
}

export const getGames = (page) => {
    const url = `${API_HOST}/rooms/`;

    fetch(url)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        }
        else {
            return res.text();
        }
    })
    .then((result) => {
        if (typeof(result) === 'object') {
            if (result.length === 0) {
                errorToast('No public games available.');
            }
            page.setState({
                rows: parseRooms(result)
            });
            return;
        }
        else {
            errorToast(result);
            return;
        }
    })
    .catch(err => {
        log(err);
    })
}

export const joinGame = (app, page, lobbyMusic, introMusic) => {
    const room = document.getElementById('room-code').value;

    if (room === "") {
        errorToast("Room code can't be blank!");
        return;    
    }

    const user = page.state.user;

    joinRoom(app, user, room, lobbyMusic, introMusic);
}

export const updateRoomNum = (room, users, page, app) => {
    const url = `${API_HOST}/rooms/join/${room}`;
    
    const user = {
        "users": users
    }

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        }
        else {
            return res.text();
        }
    })
    .then((result) => {
        if (typeof(result) === 'object') {
            if (app.state.page === "gamesList") {
                getGames(page);
            }
          }
          else {
            errorToast(result);
            return;
          }
    })
    .catch(err => {
        log(err);
    })
}

export const deleteRoom = (room, page, app) => {
    const url = `${API_HOST}/rooms/delete/${room}`;

    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        }
        else {
            return res.text();
        }
    })
    .then((result) => {
        if (typeof(result) === 'object') {
            return;
        }
    })
    .then(() => {
        if (app.state.page === "gamesList") {
            getGames(page);
        }
    })    
}

export const updateHost = (room, host, page, app) => {
    const url = `${API_HOST}/rooms/host/${room}`;
    
    const newRoom = {
        "host": host
    }

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(newRoom),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        }
        else {
            return res.text();
        }
    })
    .then((result) => {
        if (typeof(result) === 'object') {
            if (app.state.page === "gamesList") {
                getGames(page);
            }
          }
          else {
            errorToast(result);
            return;
          }
    })
    .catch(err => {
        log(err);
    })
}