import React from "react";
import Button from "../button/button.js";
import "./dashboardMenu.css";

class DashboardMenu extends React.Component {
  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <span className="dashboardMenu">
        <Button text="HOST NEW GAME"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="JOIN GAME"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="HOW TO PLAY"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="PROFILE"
                handleClick={() => {
                this.handleClick(this.state);}} />
        <Button text="LOG OUT"
                handleClick={() => {
                this.handleClick(this.state);}} />
      </span>
    )
  }
}

export default DashboardMenu
