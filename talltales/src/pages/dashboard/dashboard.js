import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import "./dashboard.css";

class Dashboard extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="dashboard">
        <div className="header">
          <AppName></AppName>
        </div>
        <div className="dashboardMenuOuterContainer">
          <div className="userIconContainer">
            <UserIcon icon="avatar01.png" username="Welcome back, gazi!" />
          </div>
          <div className="dashboardMenuInnerContainer">
            <span className="dashboardMenu">
              <Button text="HOST NEW GAME"
                      handleClick={() => {
                      this.handleClick(this.state);}} />
              <Button text="CHANGE USERNAME"
                      handleClick={() => {
                        this.handleClick(this.state);}} />
              <Button text="LEADERBOARD"
                      handleClick={() => {
                      this.handleClick(this.state);}} />
              <Button text="HOW TO PLAY"
                      handleClick={() => {
                      this.handleClick(this.state);}} />
            </span>
            <span className="dashboardMenu">
              <Button text="JOIN GAME"
                      handleClick={() => {
                      this.handleClick(this.state);}} />
              <Button text="CHANGE PASSWORD"
                      handleClick={() => {
                      this.handleClick(this.state);}} />
              <Button text="BROWSE PROFILES"
                    handleClick={() => {
                    this.handleClick(this.state);}} />
              <Button text="LOG OUT"
                      handleClick={() => {
                      this.handleClick(this.state);}} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
