import React from "react";
import Button from "../button/button.js";
import "./dashboardMenu.css";
import DropDown from "../../components/dropDown/dropDown.js";
import { menuRedirect, logout, startGame, hostGame } from "../../actions/dashboard/menu.js";
import { createdNewRoom } from "../../actions/sockets/room.js";

class DashboardMenu extends React.Component {
  componentDidMount() {
    createdNewRoom(this.props.app);
  }

  render() {
    return (
      <span className="dashboardMenu">
        <Button
          text="HOST NEW GAME"
          handleClick={() => {
            hostGame(this.props.app, this.props.parent);
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
