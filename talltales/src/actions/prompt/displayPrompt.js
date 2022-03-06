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

      // let input = document.getElementById("user-input").value;
      //   // Adds period to end of sentence if user hasn't.
      //   if (input.charAt(input.length - 1) !== ".") {
      //     input = input + ".";
      //   }
      //   stories.currStory.story =
      //     stories.currStory.story + " " + input;
      //   document.getElementById("user-input").value = "";
}

export const displayPrompt = (app, stories) => {
    switch (app.state.stage) {
        case 0:
          return stories.prompts[0].backstory[app.state.prompt];
        case 1:
          return stories.prompts[0].conflict[app.state.prompt];
        case 2:
          return stories.prompts[0].resolution[app.state.prompt];
        default:
          return "Story is complete!";
      }
}

export const isRaconteur = (app, currUser, users) => {
  if (currUser.raconteur) {
    // Resets all user inputs to . . .
    for (let i = 0; i < users.users.length; i++) {
      if (users.users[i].raconteur !== true) {
        users.users[i].currentSentence = ". . ."
      }
  }


    app.setState({
      page: 1
    })
  }
}