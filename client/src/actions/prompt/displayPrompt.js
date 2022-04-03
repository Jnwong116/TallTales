// const log = console.log

export const updatePrompt = (app) => {
    const state = app.state;

    if (state.prompt === 2 && state.stage === 0) {
        app.setState({
          stage: 1,
          prompt: 0
        });
      } else if (state.prompt === 3 && state.stage === 1) {
        app.setState({
          stage: 2,
          prompt: 0
        });
      } else if (state.prompt === 2 && state.stage === 2) {
        app.setState({
          stage: 3,
          prompt: 0
        });
      } else {
        app.setState({
          prompt: state.prompt + 1
        });
      }
}

export const displayPrompt = (app) => {
  // Gets passed in array of stories from database
    switch (app.state.stage) {
        case 0:
          return app.state.story.prompt.backstory[app.state.prompt];
        case 1:
          return app.state.story.prompt.conflict[app.state.prompt];
        case 2:
          return app.state.story.prompt.resolution[app.state.prompt];
        default:
          return "Story is complete!";
      }
}

export const isRaconteur = (app, currUser, users) => {
   for (let i = 0; i < users.length; i++) {
     // Resets users sentence
     users[i].currentSentence = ". . ."
     if (users[i].username === currUser) {
       if (users[i].raconteur) { // Sends user to vote stage
        app.setState({
          page: 1
        })
       }
     }
   }
}

export const storyComplete = (app) => {
  if (app.state.stage === 3) {
    app.setState({
      page: 3
    })
  }
}