import React from "react";
import "./profile.css";
import UserAvatar from "../../components/userIcon/userAvatar.js";
import ArrowLeft from "../../components/cssArrows/arrowLeft.js";
import ArrowRight from "../../components/cssArrows/arrowRight.js";
import Button from "../../components/button/button.js";

class ChangeAvatar extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="changeAvatarInterface">
        <div className="changeAvatarBrowser">
          <span><ArrowLeft /></span>
          <UserAvatar icon="avatar01.png" />
          <span><ArrowRight /></span>
        </div>

        <Button text="CHANGE AVATAR"
                handleClick={() => {
                this.handleClick(this.state);}} />

      </div>
    )
  }
}

export default ChangeAvatar;
