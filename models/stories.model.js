const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promptSchema = new Schema({
    backstory: {type: Array, required: true},
    conflict: {type: Array, required: true},
    resolution: {type: Array, required: true}
})

const genreSchema = new Schema({
    genre: {type: String, required: true},
    starts: {type: Array, required: true, default: []},
    prompts: {type: Array, required: true, default: []}
})

const currStorySchema = new Schema({
    start: {type: String, required: true},
    story: {type: String, default: ""},
    contributions: {type: Array, default: []}
})

const Genre = mongoose.model('Genre', genreSchema);
const Prompt = mongoose.model('Prompt', promptSchema);
const currStory = mongoose.model('currStory', currStorySchema);

module.exports = { Genre, Prompt, currStory }