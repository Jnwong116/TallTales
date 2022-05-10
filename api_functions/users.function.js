const express = require("express");

const log = console.log;

const router = express.Router();
const { ObjectID } = require("mongodb");

const { User } = require("../models/user.model");

const addUser = (user) => {
    const newUser = new User(user);

    return newUser.save();
}

const login = (username, password) => {
    return User.findByUsernamePassword(username, password);
}

const getAllUsers = () => {
    return User.find();
}

const getUser = (username) => {
    return User.findOne({ username: username });
}

const deleteUser = (username) => {
    return User.findOneAndDelete({ username: username });
}

const makeAdmin = (user) => {
    user.admin = true;

    return user;
}

const makeNormal = (user) => {
    user.admin = false;

    return user;
}

const updateUsername = async (user, username) => {
    // Checks username not taken
    let newUser = await User.findOne({ username: username });

    if (newUser !== null) {
        throw 'Username already taken';
    }

    user.username = username;

    return user;
}

const updatePassword = (user, password) => {
    user.password = password;

    return user;
}

const updateAvatar = (user, avatar) => {
    user.icon = avatar;

    return user;
}

const addStart = (user, start) => {
    user.prompts.push(start);

    return user;
}

const deleteStart = (user, start) => {
    user.prompts.splice(start, 1);

    return user;
}

const saveStory = (user, story) => {
    user.stories.push(story);

    return user;
}

const editTitle = async (user, story, title) => {
    let curStory = null;

    // Finds the story
    for (let i = 0; i < user.stories.length; i++) {
        if (user.stories[i]._id === story) {
            curStory = i;
            break;
        }
    }

    // Makes sure the story exists
    if (curStory === null) {
        throw 'Story not found';
    }

    const newStory = user.stories[curStory];
    newStory.title = title;
    user.stories.splice(curStory, 1, newStory);

    return user;
}

const getStory = async (user, story) => {
    let currStory = null;

    // Finds story
    for (let i = 0; i < user.stories.length; i++) {
        if (user.stories[i]._id === story) {
            curStory = user.stories[i];
            break;
        }
    }

      // Checks to make sure story exists
    if (curStory === null) {
        throw 'Story not found';
    }

    return curStory;
}

module.exports = { addUser, login, getAllUsers, getUser, deleteUser, makeAdmin, makeNormal, updateUsername, 
    updatePassword, updateAvatar, addStart, deleteStart, saveStory, editTitle, getStory }