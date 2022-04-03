import React from "react";
import AppName from "../../components/appName/appName.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import "./dashboard.css";

import { getUser } from "../../actions/global/users.js";

class Dashboard extends React.Component {
  state = {
    user: {
      username: "",
      icon: "avatar01.png",
      stories: []
    }
  }

  componentDidMount() {
    getUser(this, this.props.app);
  }
  
  render() {
    // console.log(this.props.app.state)
    return (
      <div className="dashboard">
        <span className="dashboardLeft">
          <div className="header">
            <AppName></AppName>
          </div>
            <DashboardMenu app={this.props.app}></DashboardMenu>
        </span>

        <span className="dashboardDivider">
        </span>

        <span className="dashboardRight">
          <div className="userIconContainer">
            <div className="userIconContainer">
              <UserIcon icon={this.state.user.icon} username={"Welcome back, " + this.state.user.username + "!"} />
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
