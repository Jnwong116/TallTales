import React from "react";
import "./userIcon_style.css";

class UserIcon extends React.Component {
  render() {
    return (
      <div className="user-icon">
        <div className="user-icon-icon">
            <img src={require("../../assets/images/" + this.props.icon)} alt="img"></img>
        </div>
        <div className="user-icon-username">
            {this.props.username}
            {(this.props.host) ? 
                <img src={require("../../assets/images/crown.png")} alt="crown"></img> : undefined
            }
        </div>
      </div>
    );
  }
}

export default UserIcon;
