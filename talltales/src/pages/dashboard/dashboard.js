import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import ArrowLeft from "../../components/cssArrows/arrowLeft.js";
import ArrowRight from "../../components/cssArrows/arrowRight.js";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.js";
import "./dashboard.css";

class Dashboard extends React.Component {

  render() {
    // Import mock data
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
            <span className="browseStoriesLeftArrow">
              <ArrowLeft />
            </span>
            <span className="browseStoriesHeader">
              Completed Stories (1/1)
            </span>
            <span className="browseStoriesRightArrow">
              <ArrowRight />
            </span>
          </div>
          <div className="storiesDisplay">
            Chris and Jordan are trying to turn random cans of food into something remotely tasty. When most canned “food” is either pet food or well past its expiration date (or both), they’ve got to turn to other means. This is all happening on a fishing boat in northern Canada. Gazi and Jasper watch on, bemused. No one thought to bring a can opener with them.  Chris reminds everyone he's on a plant-based diet. A hostile, carnivorous monkey attacks Chris shortly after this proclamation. A swarm of rats emerges from the lower decks and start chipping the cans open. Jordan throws a can at the monkey, scoring a direct hit. The monkey faints and falls off a slightly chewed-on Chris.  While this was happening, the rats opened all the cans and carried away the pet food. Luckily, since northern Canada is basically a freezer, the expiration date had no effect, so the remaining food is edible, with plenty of plant-based options. Chris and Jasper eat canned sauerkraut, while Jordan and Gazi cook up some monkey stew.
          </div>
        </span>
      </div>
    );
  }
}

export default Dashboard;
