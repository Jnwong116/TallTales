import React from "react";
import TextField from "@mui/material/TextField";
import "./userInput.css";

class UserInput extends React.Component {
  render() {
    return (
      <div className="user-input">
        <div className="user-input-title">type your sentence</div>
        <div className="user-input-tag">{this.props.tag}</div>
        <div className="user-input-bar">
          <TextField id="outlined-basic" label="Prompt" variant="outlined" />
        </div>
      </div>
    );
  }
}

export default UserInput;
