import React from "react";
import "./userIcon_style.css";

class UserIcon extends React.Component {
  render() {
    return (
      <div className="user-icon">
        <img src={require("../../assets/images/" + this.props.icon)} alt="img"></img>
        {this.props.username}
      </div>
    );
  }
}

export default UserIcon;
