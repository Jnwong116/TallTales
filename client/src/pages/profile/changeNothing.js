import React from "react";
import "./profile.css";
// import Button from "../../components/button/button.js";
import UserIconMedium from "../../components/userIcon/userIconMedium.js";

class ChangeNothing extends React.Component {

  render() {
    return (
      <div className="profileHomeInterface">
        <UserIconMedium username={this.props.parent.state.user.username} icon={this.props.parent.state.user.icon} />
      </div>
    )
  }
}

export default ChangeNothing;
