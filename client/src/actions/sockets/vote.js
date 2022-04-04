import { socket } from "./socket";
import { updatePrompt } from "../prompt/displayPrompt";
import { getCurrentUser } from "../global/users";
import { chooseRaconteur } from "../vote/raconteur";
// const log = console.log;

export const loadUserInput = (app, page) => {
    socket.on("all-users-input", ({ users }) => {
        app.setState({
            users: users
        })
        page.setState({
            loadInputs: true
        })
    })
}

export const raconteurVoted = (story, users) => {
    socket.emit("raconteur-vote", {
        room: users[0].room,
        users: users,
        story: story
    })
}

export const receiveVote = (app, page) => {
    socket.on("receive-vote", ({ users, story }) => {
        // Highlights last contribution in story
        document.getElementById('last-sentence').childNodes[0].nodeValue = " " + story.contributions[story.contributions.length - 1].sentence;

        app.setState({
            story: story,
            users: users
        });
        
        page.setState({
            confirmedVote: true,
            user: getCurrentUser(app)
        })
    })

    socket.on("")
}

export const updateStory = (story, users, app) => {
    // Updates prompt
    const appStage = updatePrompt(app);
    // console.log(appStage);

    // Checks if game is over
    if (appStage.stage !== 3) {
        // Chooses new raconteur
        chooseRaconteur(users);
    }

    socket.emit("update-story", {
        room: users[0].room,
        story: story,
        prompt: appStage.prompt,
        stage: appStage.stage
    });
}

export const storyUpdated = (app) => {
    socket.on("story-updated", ({ story, prompt, stage }) => {
        app.setState({
            story: story,
            prompt: prompt,
            stage: stage,
            page: 0
        });
    });
}