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

export const saveStory = (story, page) => {
    // Saves the story to the DB
    const url = `${API_HOST}/stories/start`;

    const request = new Request(url, {
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
            page.setState({
                story: result
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

export const saveStoryUser = (user, story, app) => {
    // Saves the story to user
    const url = `${API_HOST}/users/stories/${user.username}`;

    const request = new Request(url, {
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
            app.setState({
                page: 4
            });
            return;
        }
        else {
            errorToast(result);
            return false;
        }
    })
    .catch(err => {
        log(err);
    })
}