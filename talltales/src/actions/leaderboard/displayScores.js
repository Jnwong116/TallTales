export const sortPlayers = (a, b) => {
    // Gets passed in array of users from database
    const aScore = parseInt(a.score);
    const bScore = parseInt(b.score);
    if(aScore > bScore) {
        return -1;
    }
    if(aScore < bScore) {
        return 1;
    }
    return 0;
}

export const saveStory = (users, stories, app) => {
    // Gets passed in array of users and stories from database
    for (let i = 0; i < users.users.length; i++) {
        // Requires server call to add completed story to user's list of stories
        users.users[i].stories.push(stories.currStory.story);
    }

    app.setState({
        page: 2
    })
}