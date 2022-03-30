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
    prompts: {type: [promptSchema], required: true, default: []}
})

const contributionSchema = new Schema({
    username: {type: String, required: true},
    sentence: {type: String, required: true}
})

const currStorySchema = new Schema({
    start: {type: String, required: true},
    story: {type: String, default: ""},
    contributions: {type: [contributionSchema], default: []}
})

const Genre = mongoose.model('Genre', genreSchema);
const currStory = mongoose.model('currStory', currStorySchema);

module.exports = { Genre, currStory }