import React from "react";
import Button from "../button/button.js";
import "./dashboardMenu.css";
import DropDown from "../../components/dropDown/dropDown.js";
import RoomCreateInput from "../../components/roomCreateInput/roomCreateInput.js";
import { socket } from "../../actions/sockets/socket.js";
import {
  menuRedirect,
  logout,
  startGame
} from "../../actions/dashboard/menu.js";
import { createdNewRoom } from "../../actions/sockets/joinRoom.js";

class DashboardMenu extends React.Component {
  render() {
    createdNewRoom(this.props.app);
    return (
      <span className="dashboardMenu">
        <Button
          text="HOST NEW GAME"
          handleClick={() => {
            startGame(true, this.users, this.props.app, 2);
          }}
        />
        <Button
          text="JOIN GAME"
          handleClick={() => {
            startGame(false, this.users, this.props.app, 2);
          }}
        />
        <Button
          text="PROFILE"
          handleClick={() => {
            menuRedirect(this.props.app, 6);
          }}
        />
        <Button
          text="LOG OUT"
          handleClick={() => {
            logout(this.props.app);
          }}
        />
        <RoomCreateInput app={this.props.app}></RoomCreateInput>
        {console.log(this.props.app)}
        <div className="lobby-genre">
          <DropDown
            label={"<ROOMS>"}
            items={this.props.app.state.rooms}
            user={this.props.app.state.currUser}
            app={this.props.app}
          ></DropDown>
        </div>
      </span>
    );
  }
}

export default DashboardMenu;
