import React from "react";
import Button from "../button/button.js";
import "./dashboardMenu.css";
import DropDown from "../../components/dropDown/dropDown.js";

import {
  menuRedirect,
  logout,
  startGame
} from "../../actions/dashboard/menu.js";

class DashboardMenu extends React.Component {
  render() {
    // Import mock data
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

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
        <div className="lobby-genre">
          <DropDown
            label={"<ROOMS>"}
            items={["room1", "room2", "room3"]}
            user={this.props.app.state.currUser}
            app={this.props.app}
          ></DropDown>
        </div>
      </span>
    );
  }

}

export default DashboardMenu;
