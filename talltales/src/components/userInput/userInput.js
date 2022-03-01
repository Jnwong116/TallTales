import React from "react";
import TextField from "@mui/material/TextField";
import rightArrow from '../../assets/images/rightArrow.png';
import UserIcon from "../userIcon/userIcon.js";
import "./userInput.css";

class UserInput extends React.Component {
  render() {
    return (
      <div className="user-input">
        <div className="user-input-title">TYPE YOUR SENTENCE</div>
        <div className="flex-container">
            <img src={rightArrow} className="right-arrow" alt="Right Arrow"/>
            <div className="user-input-tag">{this.props.tag}</div>
        </div>
        <div className="flex-container user-input-field">
            <UserIcon user={this.props.user}></UserIcon>
            <TextField 
                id="outlined-basic" 
                label="OKAY AND THEN..." 
                variant="filled"
                margin="normal"
                multiline="true"
                maxRows="5"
                color="secondary"

            />
        </div>
      </div>
    );
  }
}

export default UserInput;
