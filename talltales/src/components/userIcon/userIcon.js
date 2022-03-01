import React from "react";
import avatar from '../../assets/images/avatar01.png';
import "./userIcon_style.css";

class UserIcon extends React.Component {
  render() {
    return (
      <div className="UserIcon">
          <img src={avatar} className="avatar" alt="Avatar" />
          <span>{this.props.user.username}</span>
      </div>
    );
  }
}

export default UserIcon;
