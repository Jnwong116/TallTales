import React from "react";
import AppName from "../../components/appName/appName.js";
// import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import ArrowLeft from "../../components/cssArrows/arrowLeft.js";
import ArrowRight from "../../components/cssArrows/arrowRight.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import "./dashboard.css";

import { nextStory, prevStory } from "../../actions/dashboard/stories.js";
import { getUser } from "../../actions/global/users.js";

class Dashboard extends React.Component {
  state = {
    story: 0,
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
            <span className="browseStoriesLeftArrow" onClick={() => {prevStory(this.state.story, this.state.user, this)}}>
              <ArrowLeft />
            </span>
            <span className="browseStoriesHeader">
              {
                this.state.user.stories.length === 0 ? 
                "Completed Stories" :
                "Completed Stories (" + (this.state.story + 1) + "/" + this.state.user.stories.length + ")"
              }
              
            </span>
            <span className="browseStoriesRightArrow" onClick={() => {nextStory(this.state.story, this.state.user, this)}}>
              <ArrowRight />
            </span>
          </div>
          <div className="storiesDisplay">
            {
              this.state.user.stories.length === 0 ? 
              "You have not completed any stories yet! Go play a game and come back to see your completed stories!" :
              this.state.user.stories[this.state.story]
            }
          </div>
        </span>
      </div>
    );
  }
}

export default Dashboard;
