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
    const curGenre = await Genre.findOne({ genre: genre });
  
    // Checks to make sure it exists
    if (curGenre === null) {
      throw 'Genre not found';
    }

    let currStart = null;

    // Finds start
    for (let i = 0; i < curGenre.starts.length; i++) {
        if (curGenre.starts[i].id === start) {
            
            currStart = i;
            break;
        }
    }

    // Checks to make sure start exists
    if (currStart === null) {
        throw 'Start not found';
    }

    // Edits title of start
    const newStart = curGenre.starts[currStart];
    newStart.title = title;
    curGenre.starts.splice(currStart, 1);
    curGenre.starts.push(newStart);

    return curGenre;
}

const getGenres = () => {
    return Genre.find();
}

const getGenre = async (genre) => {
    return Genre.findOne({genre: genre});
}

const deleteGenre = (genre) => {
    return Genre.findOneAndDelete({genre: genre});
}

const deleteStart = async (genre, start) => {
    const curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        throw 'Genre not found';
    }

    curGenre.starts.splice(start, 1);

    return curGenre;
}

const addPrompt = async (genre, prompt) => {
    const curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        throw 'Genre not found';
    }
    
    curGenre.prompts.push(prompt);

    return curGenre;
}

const getPrompts = async (genre) => {
    const curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        throw 'Genre not found';
    }

    return curGenre;
}

const deletePrompt = async (genre, prompt_id) => {
    const curGenre = await Genre.findOne({genre: genre});

    // Checks to make sure it exists
    if (curGenre === null) {
        throw 'Genre not found';
    }

    const prompts = genre.prompts;

    for (let i = 0; i < prompts.length; i++) {
        if (prompts[i].id === prompt_id) {
            genre.prompts.splice(i, 1);
            return genre;
        }
    }

    throw 'Prompt not found';
}

const getStory = (story_id) => {
    return Story.findById(story_id)
}

const createStory = (story) => {
    const newStory = new Story(story);

    return newStory;
}

const addContribution = async (contribution, story) => {
    const curStory = await Story.findById(story);

    // Checks to make sure it exists
    if (curStory === null) {
        throw 'Story not found';
    }

    curStory.contributions.push(contribution);
    curStory.story = curStory.story + " " + contribution.sentence;

    return curStory;
}

module.exports = { createGenre, editStartTitle, getGenres, getGenre, deleteGenre, deleteStart, addPrompt, 
    getPrompts, deletePrompt, getStory, createStory, addContribution }