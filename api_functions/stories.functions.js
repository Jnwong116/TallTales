const log = console.log;

const { Genre, Story } = require('../models/stories.model');

const createGenre = async (genre, start) => {
    // Checks if genre exists already
    let curGenre = await Genre.findOne({genre: genre});
    if (curGenre === null) { // None exists
        curGenre = new Genre({
            genre: genre,
            starts: []
        });
    }

    curGenre.starts.push(start);

    return curGenre;
}

const editStartTitle = async (genre, start, title) => {
    let currStart = null;

    // Finds start
    for (let i = 0; i < genre.starts.length; i++) {
        if (genre.starts[i].id === start) {
            
            currStart = i;
            break;
        }
    }

    // Checks to make sure start exists
    if (currStart === null) {
        throw 'Start not found';
    }

    // Edits title of start
    const newStart = genre.starts[currStart];
    newStart.title = title;
    genre.starts.splice(currStart, 1);
    genre.starts.push(newStart);

    return genre;
}

const getGenres = () => {
    return Genre.find();
}

const getGenre = (genre) => {
    return Genre.findOne({genre: genre});
}

const getStarts = async (genre) => {
    return Genre.findOne({genre: genre});
}

const deleteGenre = (genre) => {
    return Genre.findOneAndDelete({genre: genre});
}

const deleteStart = (genre, start) => {
    genre.starts.splice(start, 1);

    return genre;
}

const addPrompt = (genre, prompt) => {
    genre.prompts.push(prompt);

    return genre;
}

const getPrompts = async (genre) => {
    return Genre.findOne({genre: genre});
}

const deletePrompt = (genre, prompt_id) => {
    const prompts = genre.prompts;

    for (let i = 0; i < prompts.length; i++) {
        if (prompts[i].id === prompt_id) {
            genre.prompts.splice(i, 1);
            return genre;
        }
    }
}

module.exports = { createGenre, editStartTitle, getGenres, getGenre, getStarts, deleteGenre, deleteStart, addPrompt, 
    getPrompts }