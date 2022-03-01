import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import "./inputStage.css";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserInput from "../../components/userInput/userInput.js";
import UserIcon from "../../components/userIcon/userIcon.js";

class InputStage extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     expanded: true,
  //     activeKey: "1"
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }
  // handleSelect(eventKey) {
  //   this.setState({
  //     activeKey: eventKey
  //   });
  // }

  state = {
    stage: 0,
    prompt: 0
  };

  handleClick(state) {
    if (state.prompt === 2 && state.stage === 0) {
      this.setState({
        stage: 1,
        prompt: 0
      });
    } else if (state.prompt === 3 && state.stage === 1) {
      this.setState({
        stage: 2,
        prompt: 0
      });
    } else if (state.prompt === 2 && state.stage === 2) {
      this.setState({
        stage: 3,
        prompt: 0
      });
    } else {
      this.setState({
        prompt: state.prompt + 1
      });
    }

    const input = document.getElementById("user-input").value;
    this.stories.stories[0].currStory =
      this.stories.stories[0].currStory + " " + input;
  }

  render() {
    // Import mock data
    this.stories = require("./../../data/stories.json");
    this.users = require("./../../data/users.json");

    // Resets the story
    this.stories.stories[0].currStory =
      "chris and jordan are trying to turn random cans of food into something remotely tasty. When most canned “food” is either pet food or well past its expiration date (or both), they’ve got to turn to other means.";

    // Switches the prompt
    switch (this.state.stage) {
      case 0:
        this.prompt = this.stories.stories[0].backstory[this.state.prompt];
        break;
      case 1:
        this.prompt = this.stories.stories[0].conflict[this.state.prompt];
        break;
      case 2:
        this.prompt = this.stories.stories[0].resolution[this.state.prompt];
        break;
      default:
        this.prompt = "Story is complete!";
        break;
    }

    return (
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.users.users[0]}></Score>
        </div>
        <Story story={this.stories.stories[0]}></Story>
        <UserInput prompt={this.prompt} user={this.users.users[0]}></UserInput>
        <Button
          text="SEND"
          handleClick={() => {
            this.handleClick(this.state);
          }}
        ></Button>
      </div>
    );
  }
}

export default InputStage;
