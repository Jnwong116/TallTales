import React from "react";
import AppName from "../../components/appName/appName.js";
import UserInput from "../../components/userInput/userInput.js";
import UserIcon from "../../components/userIcon/userIcon.js";

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
  render() {
    return (
      <div>
        <AppName></AppName>
        <UserInput tag="Set up the backstory!"></UserInput>
        <UserIcon />
      </div>
    );
  }
}

export default InputStage;
