import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import ArrowLeft from "../../components/cssArrows/arrowLeft.js";
import ArrowRight from "../../components/cssArrows/arrowRight.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import "./howToPlay.css";

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
          <DashboardMenu></DashboardMenu>
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
            </span>
            <span className="browseStoriesHeader">
              How to Play
            </span>
            <span className="browseStoriesRightArrow">
            </span>
          </div>
          <div className="storiesDisplay">
            Tall Tales is a multiplayer collaborative story-telling app.
            You have the option to act as the game host by creating a lobby,
            or to join an existing game. The basic gameplay consists of prompting
            users to create their own sentences given a story prompt. Each round,
            one player is selected as the Raconteur, who will not create a sentence,
            but choose their favorite sentence from the other players to add as
            a permanent part of the story, while the others are discarded.
            This gameplay loop repeats over several stages (divided into basic
            story elements: backstory, conflict, resolution), with a new
            Raconteur each round. Once all stages are complete, the player with
            the most winning sentences is crowned as the most valuable contributor,
            and the collaborative story is displayed for all to see.
          </div>
        </span>
      </div>
    );
  }
}

export default Dashboard;
