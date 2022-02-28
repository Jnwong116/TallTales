import React from "react";
import "./inputStage.css";
import AppName from "../../components/appName/appName.js";
import Score from "../../components/score/score.js";

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
      <div className="input-stage">
        <div className="input-stage-header">
          <AppName></AppName>
          <Score score={0}></Score>
        </div>
      </div>
    );
  }
}

export default InputStage;
