import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
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
                  <UserIcon username={e.username} icon={e.icon}></UserIcon>
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
