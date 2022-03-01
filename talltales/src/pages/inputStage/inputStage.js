import React from "react";
import AppName from '../../components/appName/appName.js';
import Button from '../../components/button/button.js';
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

  handleClick() {
    console.log("send");
    
    }

  render() {
    // Import mock data
    this.stories = require('./../../data/stories.json');
    this.users = require('./../../data/users.json');

    return (
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score user={this.users.users[0]}></Score>
        </div>
        <Story story={this.stories.stories[0]}></Story>
        <UserInput tag="set up the backstory!" user={this.users.users[0]}></UserInput>
        <Button text="SEND" handleClick={this.handleClick}></Button>
      </div>
    );
  }
}

export default InputStage;
