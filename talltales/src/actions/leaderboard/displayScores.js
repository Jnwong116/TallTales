export const sortPlayers = (a, b) => {
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
    for (let i = 0; i < users.users.length; i++) {
        users.users[i].stories.push(stories.currStory.story);
    }

    app.setState({
        page: 2
    })
}