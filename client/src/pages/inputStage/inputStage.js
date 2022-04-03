import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserInput from "../../components/userInput/userInput.js";

import { displayPrompt, isRaconteur, storyComplete } from "../../actions/prompt/displayPrompt.js";
import { saveInput } from "../../actions/input/input.js";
import { getCurrentUser } from "../../actions/global/users.js";

import "./inputStage.css";

class InputStage extends React.Component {
  render() {
    // console.log(this.props.app.state)

    // Checks if story is complete
    storyComplete(this.props.app);

    // Checks if user is raconteur
    isRaconteur(this.props.app, this.props.app.state.currUser, this.props.app.state.users);

    this.prompt = displayPrompt(this.props.app);
    this.user = getCurrentUser(this.props.app);

    return (
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.user}></Score>
        </div>
        <Story story={this.props.app.state.story.story}></Story>
        <UserInput prompt={this.prompt} user={this.user}></UserInput>
        <Button
          text="SUBMIT"
          handleClick={() => {
            saveInput(this.props.app.state.currUser, this.props.app);
          }}
        ></Button>
      </div>
    );
  }
}

export default InputStage;
