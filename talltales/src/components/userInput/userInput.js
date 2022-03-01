import React from "react";
import TextField from "@mui/material/TextField";
import "./userInput.css";
import Prompt from "../prompt/prompt";

class UserInput extends React.Component {
  render() {
    return (
      <div className="user-input">
        <div className="user-input-title">type your sentence</div>
        <Prompt prompt={this.props.prompt}></Prompt>
        <div className="user-input-bar">
          <TextField id="outlined-basic" label="Prompt" variant="outlined" />
        </div>
      </div>
    );
  }
}

export default UserInput;
