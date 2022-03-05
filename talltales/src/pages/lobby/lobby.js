import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import DropDown from "../../components/dropDown/dropDown.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./lobby.css";

import { Link } from "react-router-dom";

class Lobby extends React.Component {
  render() {
    // Array of genres
    const genres = this.storiesData.stories.map(object => object.genre);

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

        <div className="lobby-genre">
            <DropDown items={genres}></DropDown>
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
