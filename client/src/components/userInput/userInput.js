import React from "react";
import TextField from "@mui/material/TextField";
import rightArrow from "../../assets/images/rightArrow.png";
import UserIcon from "../userIcon/userIcon.js";
import Prompt from "../prompt/prompt";
import "./userInput.css";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

class UserInput extends React.Component {
  state = {
    time: 0,
    duration: 60 * 1000
  };

  onTimerUpdate = ({ time, duration }) => {
    if (time >= 60 * 1000) {
      this.props.enterFunction();
    }
    this.setState({
      time,
      duration
    });
  };
  render() {
    const { time, duration } = this.state;

    const onKeyUp = this.props.enterFunction
      ? event => {
          if (event.key === "Enter") {
            this.props.enterFunction();
          }
        }
      : undefined;

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
              autoComplete="off"
              color="secondary"
              multiline
              onKeyUp={onKeyUp}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className="timer-container">
            <Timer
              active
              duration={60 * 1000}
              onTimeUpdate={this.onTimerUpdate}
            />
            <Timecode time={duration - time} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
