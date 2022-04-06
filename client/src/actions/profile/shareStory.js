import ENV from './../../config.js';
import { errorToast, successToast } from '../toastify/toastify.js';
const API_HOST = ENV.api_host;

const log = console.log

export const shareStory = (story, user) => {
    const url = `${API_HOST}/past-stories?story=${story._id}&user=${user}`

    // Opens page in new tab
    window.open(url);
}

export const editTitle = (page) => {
    const title = document.getElementById("storyTitle");
    title.setAttribute("contenteditable", "true");

    // Changes enter key function
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.id === "storyTitle") {
            e.preventDefault();
            if (title.childNodes.length === 0) { // Title is empty
                errorToast("The title can't be blank!");
            }
            else {
                const newTitle = title.childNodes[0].nodeValue;
                saveTitle(page, newTitle);
                title.setAttribute("contenteditable", "false");
            }
        }
    })
}

function saveTitle(page, title) {
    const storyID = page.state.user.stories[page.state.story]._id;
    const user = page.state.user.username;

    const url = `${API_HOST}/users/stories/${user}/${storyID}`;

    const story = {
        "title": title
    };

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
              user: result
            });
            log(page);
            successToast('Story Title Saved');
            return;
          }
          else {
            errorToast(result);
            return;
          }
    })
}
