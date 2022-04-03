import React from "react";
import AppName from "../../components/appName/appName.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import ProfileMenu from "../../components/dashboardMenu/profileMenu.js";
import CompletedStories from "../../components/completedStories/completedStories.js";
import ChangeName from "../../components/changeName/changeName.js";
import ChangePassword from "../../components/changePassword/changePassword.js";
import ChangeAvatar from "../../components/changeAvatar/changeAvatar.js";
import "./profile.css";

import { getUser } from "../../actions/global/users.js";

class Profile extends React.Component {
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
      <div className="profile">
          <div className="profile-header">
            <AppName />
          </div>
          <div className="profileLeft">
            <ProfileMenu app={this.props.app}/>
        </div>

        <span className="profileDivider">
        </span>

        <div className="profileRight">
          <div className="profileInterface">
            <div className="profileAvatarContainer">
              <UserIcon icon={this.state.user.icon} username={this.state.user.username} />
            </div>
            <div className="profileInterfaceDivider" />
              {
                this.props.app.state.page === 6 ? <CompletedStories app={this.props.app} parent={this} /> :
                (
                  this.props.app.state.page === 7 ? <ChangeName app={this.props.app} parent={this} /> :
                  (
                    this.props.app.state.page === 8 ? <ChangePassword app={this.props.app} parent={this} /> :
                    <ChangeAvatar app={this.props.app} parent={this} />
                  )
                )
              }
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
