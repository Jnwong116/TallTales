import ENV from './../../config.js';
import { errorToast } from "../../actions/toastify/toastify.js";

const API_HOST = ENV.api_host;
const log = console.log

export const sortPlayers = (a, b) => {
    // Gets passed in array of users from database
    const aScore = parseInt(a.score);
    const bScore = parseInt(b.score);
    if(aScore > bScore) {
        return -1;
    }
    if(aScore < bScore) {
        return 1;
    }
    return 0;
}

export const saveStory = (user, story, app) => {
    let savedStory = "";

    // Saves the story to the DB
    let url = `${API_HOST}/stories/start`;

    let request = new Request(url, {
        method: "post",
        body: JSON.stringify(story),
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
            savedStory = result;
            return;
        }
        else {
            errorToast(result);
            return;
        }
    })
    .then(() => { // Saves the story to user
        if (savedStory !== "") {
            url = `${API_HOST}/users/stories/${user.username}`;

            request = new Request(url, {
                method: "post",
                body: JSON.stringify(savedStory),
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
                    return true;
                }
                else {
                    errorToast(result);
                    return false;
                }
            })
            .then((changePage) => {
                if (changePage) {
                    app.setState({
                        page: 4
                    })
                }
            })
        }
    })
    .catch(err => {
        log(err);
    })
}