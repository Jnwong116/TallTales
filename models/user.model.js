const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, minlength: 1, trim: true},
    password: {type: String, required: true, minlength: 1, trim: true},
    icon: {type: String, required: true},
    score: {type: Number, default: 0},
    raconteur: {type: Boolean, default: false},
    host: {type: Boolean, default: false},
    currentSentence: {type: String, default: ". . ."},
    stories: {type: Array, default: []},
    prompts: {type: Array, default: []},
    admin: {type: Boolean, required: true, default: false}
})

const User = mongoose.model('User', userSchema);

module.exports = { User }