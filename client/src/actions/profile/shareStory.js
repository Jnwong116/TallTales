import ENV from './../../config.js';
import { successToast } from '../toastify/toastify.js';
const API_HOST = ENV.api_host;

// const log = console.log

export const shareStory = (story) => {
    const url = `${API_HOST}/past-stories?story=${story._id}`

    navigator.clipboard.writeText(url);

    successToast("Copied to clipboard!");
}