import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserInput from "../../components/userInput/userInput.js";
import { Link } from "react-router-dom";

import { updatePrompt, displayPrompt } from "../../actions/prompt/displayPrompt.js";
import { saveInput } from "../../actions/input/input.js";

import "./inputStage.css";

class InputStage extends React.Component {
  state = {
    stage: 0,
    prompt: 0
  };

  render() {
    // Import mock data
    this.stories = this.props.app.state.stories; // Change to match the actual genre
    this.users = this.props.app.state.users;

    // Resets the story
    if (this.state.stage === 0 && this.state.prompt === 0) {
      this.stories.currStory.story =
      this.stories.stories[0].starts[0];
    }

    // Switches the prompt
    this.prompt = displayPrompt(this, this.stories);

    return (
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.props.app.state.currUser}></Score>
        </div>
        <Story story={this.stories.currStory.story}></Story>
        <UserInput prompt={this.prompt} user={this.props.app.state.currUser}></UserInput>
        <Link onClick={() => {
          saveInput(this.props.app.state.currUser);
          updatePrompt(this.props.app)
        }}
        to={{
          pathname: '/voteStage',
          state: {
            stories: this.stories,
            currUser: this.props.app.state.currUser,
            users: this.users
          }
        }}>
          <Button
            text="SEND"
          ></Button>
        </Link>
      </div>
    );
  }
}

export default InputStage;
