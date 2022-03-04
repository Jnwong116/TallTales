import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import Score from "../../components/score/score.js";
import Story from "../../components/story/story.js";
import UserInput from "../../components/userInput/userInput.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./lobby.css";

import { Link } from "react-router-dom";

class Lobby extends React.Component {
  state = {
    stage: 0,
    prompt: 0
  };

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="lobby">
        {/* TODO: Make this header into a component so it's reusable in every page */}
        <div className="header">
          <AppName></AppName>
        </div>
        <div className="lobby-content">
          <div className="lobby-header">LOBBY</div>
          <div className="lobby-players">
            {this.usersData.users.map((e, i) => {
              return (
                <div key={i} className="lobby-player">
                  <img src={require("../../assets/images/" + e.icon)}></img>
                  {e.username}
                </div>
              );
            })}
          </div>
        </div>

        <Link to={{
          pathname: '/gameStage'
        }} className="link">
          <Button
            text="START GAME"
            handleClick={() => {
              this.handleClick(this.state);
            }}
          ></Button>
        </Link>
      </div>
    );
  }
}

export default Lobby;
