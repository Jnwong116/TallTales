import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import DropDown from "../../components/dropDown/dropDown.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./lobby.css";

import { io } from "socket.io-client";

import { redirect } from "../../actions/lobby/redirect.js";

class Lobby extends React.Component {
  render() {
    const socket = io("http://localhost:5008/");

    socket.on("current-rooms", rooms => {
      console.log(rooms);
    });
    // Array of genres
    // Requires server call to get list of stories and go through all genres
    const genres = this.props.app.state.stories.stories.map(
      object => object.genre
    );

    console.log(this.props.app.state);

    return (
      <div className="lobby">
        {/* TODO: Make this header into a component so it's reusable in every page */}
        <div className="header">
          <AppName></AppName>
        </div>
        <div className="lobby-content">
          {this.props.app.state.currUser.host ? (
            <div className="lobby-genre">
              <DropDown items={genres}></DropDown>
            </div>
          ) : (
            <span></span>
          )}

          <div className="lobby-column">
            <div className="lobby-header">LOBBY</div>
            <div className="lobby-players">
              {this.props.app.state.users.map((e, i) => {
                const username = e.host ? e.username + " (h)" : e.username;
                return (
                  <div key={i} className="lobby-player">
                    <UserIcon username={username} icon={e.icon}></UserIcon>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Button
          text="START GAME"
          handleClick={() => {
            redirect(this.props.app);
          }}
        ></Button>
      </div>
    );
  }
}

export default Lobby;
