import React from "react";
import "./userIcon_style.css";

class UserIconMedium extends React.Component {
  render() {
    return (
      <div className="userIconMedium">
        <img className="mediumAvatar" src={require("../../assets/images/" + this.props.icon)}></img>
        <div className="mediumAvatarCaption"> currentUser's profile {this.props.username} </div>
      </div>
    );
  }
}
// TODO: change hardcoded username to dynamic (current user)

export default UserIconMedium;
