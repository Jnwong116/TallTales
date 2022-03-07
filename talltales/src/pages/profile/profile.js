import React from "react";
import AppName from "../../components/appName/appName.js";
import Button from "../../components/button/button.js";
import UserIcon from "../../components/userIcon/userIcon.js";
import ProfileMenu from "../../components/dashboardMenu/profileMenu.js";
import ChangeNothing from "./changeNothing.js";
import ChangeName from "./changeName.js";
import ChangePassword from "./changePassword.js";
import ChangeAvatar from "./changeAvatar.js";
import "./profile.css";

class Profile extends React.Component {
  state = {
    loading: true
  }

  render() {
    // Import mock data
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <div className="profile">
          <div className="profile-header">
            <AppName />
          </div>
          <span>
            <ProfileMenu app={this.props.app}/>
        </span>

        <span className="profileDivider">
        </span>

        <div className="profileRight">
          <div className="profileInterface">
            <div className="profileAvatarContainer">
              <UserIcon icon={this.props.app.state.currUser.icon} username={this.props.app.state.currUser.username} />
            </div>
            <div className="profileInterfaceDivider" />
              {
                this.props.app.state.page === 6 ? <ChangeNothing app={this.props.app} parent={this} /> :
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
