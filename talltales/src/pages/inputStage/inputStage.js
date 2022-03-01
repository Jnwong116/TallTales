import React from "react";
import AppName from '../../components/appName/appName.js';
import Button from '../../components/button/button.js';
import "./inputStage.css";
import Score from "../../components/score/score.js";
import UserInput from "../../components/userInput/userInput.js";

class InputStage extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  handleClick() {
    console.log("send");
    
    }

  render() {

    return (
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score score={0}></Score>
        </div>
        <UserInput tag="Set up the backstory!"></UserInput>
        <Button text="SEND" handleClick={this.handleClick}></Button>
      </div>
    );
  }
}

export default InputStage;
