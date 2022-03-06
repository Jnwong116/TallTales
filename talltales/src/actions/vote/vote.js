import { updatePrompt } from "../prompt/displayPrompt";
import { chooseRaconteur } from "./raconteur";

export const AIinput = (users, app, page) => {
    const input = app.state.stage + app.state.prompt;
    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].raconteur !== true) {
            if (users.users[i].username !== app.state.currUser.username) {
                // document.getElementById(users.users[i].username).childNodes[0].nodeValue = users.inputs[i].inputs[input];
                users.users[i].currentSentence = users.inputs[i].inputs[input];
            }
        }
    }

    page.setState({
        loading: false
    })
}

export const generateAIinput = (users, app, page) => {    
    setTimeout(() => {
        AIinput(users, app, page)
    }, 3000);
}

export const AIVote = (users, stories, raconteur, app, page) => {
    setTimeout(() => {
        let vote = (Math.floor(Math.random() * users.users.length));
        // let vote = 0;
        while (users.users[vote].username === raconteur) {
            vote = (Math.floor(Math.random() * users.users.length));
        }

        const user = users.users[vote];
        const input = user.currentSentence;
        // Add styling to make new selected sentence stand out
        stories.currStory.story = stories.currStory.story + " " + input;
        user.score = user.score + 10;
        document.getElementById(user.username).classList.add("vote-option-text-selected");

        // Adds contributions
        stories.currStory.contributions.push({
            username: user.username,
            sentence: input
        })

        page.setState({
            loading: false
        })
        // document.getElementsByClassName("story-current")[0].childNodes[0].nodeValue = stories.currStory.story;

        console.log(vote);

        setTimeout(() => {
            updatePrompt(app);
            chooseRaconteur(users.users);
            app.setState({
                page: 0
            });
        }, 5000)

    }, 3000);
}

export const confirmVote = (users, stories, app, page) => {
    const input = page.state.choice;

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].currentSentence === input) {
            const selectUser = users.users[i];

            // Add styling to make new selected sentence stand out
            stories.currStory.story = stories.currStory.story + " " + input;
            selectUser.score = selectUser.score + 10;
            

            // Adds contributions
            stories.currStory.contributions.push({
                username: selectUser.username,
                sentence: input
            })

            page.setState({
                loading: false
            })

            setTimeout(() => {
                updatePrompt(app);
                chooseRaconteur(users.users);
                app.setState({
                    page: 0
                });
            }, 5000)
    

        }
    }
}

export const select = (users, user, raconteur, app, page) => {
    if (app.state.currUser.username === raconteur) {
        for (let i = 0; i < users.users.length; i++) {
            if (users.users[i].username === user) {
                const selectUser = users.users[i];
                const input = selectUser.currentSentence;

                const sentences = document.getElementsByClassName('vote-option-text-selected');

                if (sentences.length !== 0) {
                    sentences[0].classList.remove('vote-option-text-selected');
                }

                document.getElementById(user).classList.add("vote-option-text-selected");

                page.setState({
                    loading: false,
                    choice: input
                })
            }
        }
    }
}