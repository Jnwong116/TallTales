import { io } from "socket.io-client"
import ENV from "../../config.js";
import { errorToast } from "../toastify/toastify.js";

const API_HOST = ENV.api_host;
const socket = io(ENV.api_host);
const log = console.log


export const redirect = (app, start, prompts) => {
    socket.emit("start-game", {
        room: app.state.users[0].room,
        storyStart: start,
        storyPrompts: prompts
    });
}

export const getGenres = (page) => {
    const url = `${API_HOST}/stories`;

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
            page.setState({
                genres: result
            })
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