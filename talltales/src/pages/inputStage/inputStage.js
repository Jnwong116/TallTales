import React from "react";
import AppName from '../../components/appName/appName.js';
import Button from '../../components/button/button.js';

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
        <div>
            <AppName></AppName>
            <Button text="SEND" handleClick={this.handleClick}></Button>
        </div>
    );
  }
}

export default InputStage;
