import ENV from './../../config.js';
const API_HOST = ENV.api_host;

// const log = console.log

export const shareStory = (story) => {
    const url = `${API_HOST}/past-stories?story=${story._id}`

    // Opens page in new tab
    window.open(url);
}