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
        <span className="dashboardLeft">
          <div className="header">
            <AppName></AppName>
          </div>
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
        </span>

        <span className="dashboardDivider">
        </span>

        <span className="dashboardRight">
          <div className="userIconContainer">
            <div className="userIconContainer">
              <UserIcon icon="avatar01.png" username="Welcome back, gazi!" />
            </div>
          </div>
          <div className="storiesNavigation">
            <span className="browseStoriesLeftArrow">
              &lt;
            </span>
            <span className="browseStoriesHeader">
              Latest Stories
            </span>
            <span className="browseStoriesLeftArrow">
              &gt;
            </span>
          </div>
          <div className="storiesDisplay">
            Chris and Jordan are trying to turn random cans of food into something remotely tasty. When most canned “food” is either pet food or well past its expiration date (or both), they’ve got to turn to other means. This is all happening on a fishing boat in northern Canada. Gazi and Jasper watch on, bemused. No one thought to bring a can opener with them.  Chris reminds everyone he's on a plant-based diet. A hostile, carnivorous monkey attacks Chris shortly after this proclamation. A swarm of rats emerges from the lower decks and start chipping the cans open. Jordan throws a can at the monkey, scoring a direct hit. The monkey faints and falls off a slightly chewed-on Chris.  While this was happening, the rats opened all the cans and carried away the pet food. Luckily, since northern Canada is basically a freezer, the expiration date had no effect, so the remaining food is edible, with plenty of plant-based options. Chris and Jasper eat canned sauerkraut, while Jordan and Gazi cook up some monkey stew.
          </div>
        </span>




        {/*
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
      */}
      </div>
    );
  }
}

export default Dashboard;
