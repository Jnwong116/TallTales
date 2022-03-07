import React from "react";
import Button from "../button/button.js";
import "./dashboardMenu.css";

class ProfileMenu extends React.Component {
  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <span className="dashboardMenu">
        <Button text="CHANGE USERNAME"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="CHANGE PASSWORD"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="CHANGE AVATAR"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="BACK"
                handleClick={() => {
                this.handleClick(this.state);}} />
      </span>
    )
  }
}

export default ProfileMenu
