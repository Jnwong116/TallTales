import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserInput from "../../components/userInput/userInput.js";
import MuteButton from "../../components/muteButton/muteButton.js";

import { displayPrompt, isRaconteur, storyComplete } from "../../actions/prompt/displayPrompt.js";
import { saveInput } from "../../actions/input/input.js";
import { getCurrentUser } from "../../actions/global/users.js";
import { userLeft, raconteurLeft, forfeitGame } from "../../actions/sockets/room.js";

import "./inputStage.css";

class InputStage extends React.Component {
  state = {
    user: {
      username: "",
      icon: "avatar01.png"
    }
  }

  componentDidMount() {    
    // Sets up listeners if someone leaves the game
    userLeft(this.props.app);
    raconteurLeft(this.props.app);
    forfeitGame(this.props.app);

    // Checks if story is complete
    storyComplete(this.props.app);

    // Checks if user is raconteur
    isRaconteur(this.props.app, this.props.app.state.currUser, this.props.app.state.users);

    this.setState({
      user: getCurrentUser(this.props.app)
    });
  }

  render() {
    this.prompt = displayPrompt(this.props.app);

    return (
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.state.user}></Score>
        </div>
        <Story story={this.props.app.state.story.story}></Story>
        <UserInput prompt={this.prompt} user={this.state.user} enterFunction={() => {saveInput(this.props.app);}}></UserInput>
        <Button
          text="SUBMIT"
          handleClick={() => {
            saveInput(this.props.app);
          }}
        ></Button>
        <div className="mute-footer">
            <MuteButton app={this.props.app} audioRef={this.props.gameAudioRef}/>
        </div>
      </div>
    );
  }
}

export default InputStage;
