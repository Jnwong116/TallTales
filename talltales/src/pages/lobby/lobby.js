import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./lobby.css";

class Lobby extends React.Component {
  render() {
    console.log(this.props.app.state)
    return (
      <div className="lobby">
        {/* TODO: Make this header into a component so it's reusable in every page */}
        <div className="header">
          <AppName></AppName>
        </div>
        <div className="lobby-content">
          <div className="lobby-header">LOBBY</div>
          <div className="lobby-players">
            {this.props.app.state.users.users.map((e, i) => {
              return (
                <div key={i} className="lobby-player">
                  <UserIcon username={e.username} icon={e.icon}></UserIcon>
                </div>
              );
            })}
          </div>
        </div>
        <Button
          text="START GAME"
          handleClick={() => {
            this.handleClick(this.state);
          }}
        ></Button>
      </div>
    );
  }
}

export default Lobby;
