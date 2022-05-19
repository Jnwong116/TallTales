const express = require("express");

const log = console.log;

const { User } = require("../models/user.model");

const addUser = async (user) => {
    // Checks if user exists already
    const curUser = await User.findOne({username: user.username});

    if (curUser !== null) {
        throw 'Username taken already';
    }

    const newUser = new User(user);

    return newUser;
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

const makeAdmin = async (user) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    curUser.admin = true;

    return curUser;
}

const makeNormal = async (user) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    curUser.admin = false;

    return curUser;
}

const updateUsername = async (user, username) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    // Checks username not taken
    let newUser = await User.findOne({ username: username });

    if (newUser !== null) {
        throw 'Username already taken';
    }

    curUser.username = username;

    return curUser;
}

const updatePassword = async (user, password) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    curUser.password = password;

    return curUser;
}

const updateAvatar = async (user, avatar) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    curUser.icon = avatar;

    return curUser;
}

const addStart = async (user, start) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }


    curUser.prompts.push(start);

    return curUser;
}

const deleteStart = async (user, start) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    curUser.prompts.splice(start, 1);

    return curUser;
}

const saveStory = async (user, story) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    curUser.stories.push(story);

    return curUser;
}

const editTitle = async (user, story, title) => {
    const curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    let curStory = null;

    // Finds the story
    for (let i = 0; i < curUser.stories.length; i++) {
        if (curUser.stories[i]._id === story) {
            curStory = i;
            break;
        }
    }

    // Makes sure the story exists
    if (curStory === null) {
        throw 'Story not found';
    }

    const newStory = curUser.stories[curStory];
    newStory.title = title;
    curUser.stories.splice(curStory, 1, newStory);

    return curUser;
}

const getStory = async (user, story) => {
    let curUser = await User.findOne({ username: user });

    // Checks to make sure it exists
    if (curUser === null) {
        throw 'User not found';
    }

    let curStory = null;

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