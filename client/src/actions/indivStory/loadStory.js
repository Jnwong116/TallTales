import ENV from './../../config.js';
import { successToast } from '../toastify/toastify.js';
import { useLocation } from 'react-router-dom';

const API_HOST = ENV.api_host;
// const log = console.log

export const loadStory = (page, url) => {
    const search = useLocation.search;
    const story = new URLSearchParams(search).get('story');

    console.log(story);

    const storyID = new URLSearchParams(url).get('story');

    console.log(storyID);
}