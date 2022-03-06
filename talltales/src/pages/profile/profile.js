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

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="profile">
        <span className="profileLeft">
          <div className="header">
            <AppName />
          </div>
            <ProfileMenu />
        </span>

        <span className="profileDivider">
        </span>

        <span className="profileRight">
          <div className="profileInterface">
            <div className="profileAvatarContainer">
              <UserIcon icon="avatar01.png" username="UserName" />
            </div>
            <div className="profileInterfaceDivider" />

              <ChangeNothing />
              {/*<ChangeName />*/}
              {/*<ChangePassword />*/}
              {/*<ChangeAvatar />*/}

          </div>
        </span>
      </div>
    );
  }
}

export default Profile;
