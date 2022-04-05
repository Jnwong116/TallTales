import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserInput from "../../components/userInput/userInput.js";
import MuteButton from "../../components/muteButton/muteButton.js";

import { displayPrompt, isRaconteur, storyComplete } from "../../actions/prompt/displayPrompt.js";
import { saveInput } from "../../actions/input/input.js";
import { getCurrentUser } from "../../actions/global/users.js";
import { timerToast, closeToasts } from "../../actions/toastify/toastify.js";
import { backButtonHandler } from "../../actions/router/render.js";

import "./inputStage.css";

class InputStage extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.push("/inputStage");
  }

  state = {
    user: {
      username: "",
      icon: "avatar01.png"
    }
  }

  componentDidMount() {    
    backButtonHandler(this.props.app, this.props.history);

    // Checks if story is complete
    storyComplete(this.props.app);

    // Checks if user is raconteur
    isRaconteur(this.props.app, this.props.app.state.currUser, this.props.app.state.users);

    this.setState({
      user: getCurrentUser(this.props.app)
    });
    
    // If user is not the Racounteur, give them a playing timer
    const userObject = this.props.app.state.users.filter((user) => (user.username === this.props.app.state.currUser))[0];
    if(!userObject.raconteur) {
        this.dingRef.audioEl.current.play();
        timerToast(60);
    }
  }

  render() {
    this.prompt = displayPrompt(this.props.app);

    return (
      <div className="input-stage">
        <ReactAudioPlayer
            src={require("../../assets/audio/ding.mp3")}
            autoPlay={false}
            volume={0.1}
            ref={(element) => { this.dingRef = element }}
        />
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.state.user}></Score>
        </div>
        <Story story={this.props.app.state.story.story}></Story>
        <UserInput prompt={this.prompt} user={this.state.user} enterFunction={() => {saveInput(this.props.app);}}></UserInput>
        <Button
          text="SUBMIT"
          handleClick={() => {
            closeToasts();
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
