import React from "react";
import Button from "../button/button.js";
import "./profileMenu.css";

class AdminMenu extends React.Component {
  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <span className="dashboardMenu">
        <Button text="BROWSE USERS"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="BROWSE PROMPTS"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="RESET DATABASE"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="LOG OUT"
                handleClick={() => {
                this.handleClick(this.state);}} />
      </span>
    )
  }
}

export default AdminMenu
