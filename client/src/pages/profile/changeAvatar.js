import React from "react";
import "./profile.css";
import UserAvatar from "../../components/userIcon/userAvatar.js";
import ArrowLeft from "../../components/cssArrows/arrowLeft.js";
import ArrowRight from "../../components/cssArrows/arrowRight.js";
import Button from "../../components/button/button.js";

import { changeAvatar, prevAvatar, nextAvatar } from "../../actions/editProfile/editProfile";

class ChangeAvatar extends React.Component {
  state = {
    avatar: this.props.app.state.currUser.icon
  }

  render() {
    // Import mock data
    // Requires server call to get list of stories and users from server
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <div className="changeAvatarInterface">
        <div className="changeAvatarBrowser">
          <span onClick={() => prevAvatar(this.state.avatar, this)}><ArrowLeft /></span>
          <UserAvatar icon={this.state.avatar} />
          <span onClick={() => nextAvatar(this.state.avatar, this)}><ArrowRight /></span>
        </div>

        <Button text="CHANGE AVATAR"
                handleClick={() => {
                changeAvatar(this.users, this.props.app, this.props.parent, this.state.avatar)}} />

      </div>
    )
  }
}

export default ChangeAvatar;