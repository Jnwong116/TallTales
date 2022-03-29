const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promptSchema = new Schema({
    genre: {type: String, required: true},
    backstory: {type: Array, required: true},
    conflict: {type: Array, required: true},
    resolution: {type: Array, required: true}
})

const storySchema = new Schema({
    genre: {type: String, required: true},
    starts: {type: Array, required: true}
})

const currStorySchema = new Schema({
    start: {type: String, required: true},
    story: {type: String, default: ""},
    contributions: {type: Array, default: []}
})

const Story = mongoose.model('Story', storySchema);
const Prompt = mongoose.model('Prompt', promptSchema);
const currStory = mongoose.model('currStory', currStorySchema);

module.exports = { Story, Prompt, currStory }