import React from "react";
import TextField from "@mui/material/TextField";
import rightArrow from "../../assets/images/rightArrow.png";
import UserIcon from "../userIcon/userIcon.js";
import Prompt from "../prompt/prompt";
import "./userInput.css";

class UserInput extends React.Component {
  render() {
    return (
      <div className="user-input">
        <div className="user-input-header">TYPE YOUR SENTENCE</div>
        <div className="stage-indicator">
          <img src={rightArrow} className="stage-arrow" alt="Right Arrow" />
          <div className="user-input-tag">
            <Prompt prompt={this.props.prompt.toUpperCase()}></Prompt>
          </div>
        </div>
        <div className="stage-indicator user-input-field">
          <UserIcon
            username={this.props.user.username}
            icon={this.props.user.icon}
          ></UserIcon>
          <div className="user-input-text-field">
            <TextField
              id="user-input"
              label="OKAY AND THEN..."
              variant="filled"
              margin="normal"
              multiline="true"
              maxRows="5"
              color="secondary"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;