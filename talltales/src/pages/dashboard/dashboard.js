import React from "react";
import AppName from "../../components/appName/appName.js";
// import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import ArrowLeft from "../../components/cssArrows/arrowLeft.js";
import ArrowRight from "../../components/cssArrows/arrowRight.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import "./dashboard.css";

import { nextStory, prevStory } from "../../actions/dashboard/stories.js";

class Dashboard extends React.Component {
  state = {
    story: 0
  }
  render() {
    // Import mock data
    // Requires server call to get list of stories and users from server
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

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
              <UserIcon icon={this.props.app.state.currUser.icon} username={"Welcome back, " + this.props.app.state.currUser.username + "!"} />
            </div>
          </div>
          <div className="storiesNavigation">
            <span className="browseStoriesLeftArrow" onClick={() => {prevStory(this.state.story, this.props.app.state.currUser, this)}}>
              <ArrowLeft />
            </span>
            <span className="browseStoriesHeader">
              {
                this.props.app.state.currUser.stories.length === 0 ? 
                "Completed Stories" :
                "Completed Stories (" + (this.state.story + 1) + "/" + this.props.app.state.currUser.stories.length + ")"
              }
              
            </span>
            <span className="browseStoriesRightArrow" onClick={() => {nextStory(this.state.story, this.props.app.state.currUser, this)}}>
              <ArrowRight />
            </span>
          </div>
          <div className="storiesDisplay">
            {
              this.props.app.state.currUser.stories.length === 0 ? 
              "You have not completed any stories yet! Go play a game and come back to see your completed stories!" :
              this.props.app.state.currUser.stories[this.state.story]
            }
          </div>
        </span>
      </div>
    );
  }
}

export default Dashboard;
