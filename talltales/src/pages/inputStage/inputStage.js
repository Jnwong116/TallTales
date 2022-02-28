import React from "react";
import AppName from '../../components/appName/appName.js';

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
        </div>
    );
  }
}

export default InputStage;
