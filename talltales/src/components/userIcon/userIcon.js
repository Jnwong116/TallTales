import React from "react";
import avatar from '../../assets/images/avatar01.png';
import "./userIcon_style.css";

class UserIcon extends React.Component {
  render() {
    return (
      <div className="user-icon">
          <img src={avatar} className="avatar" alt="Avatar" />
          <div className="name">{this.props.user.username}</div>
      </div>
    );
  }
}

export default UserIcon;
