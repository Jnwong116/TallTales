import React from "react";
import "./profile.css";
// import Button from "../../components/button/button.js";
import UserIconMedium from "../../components/userIcon/userIconMedium.js";

class ChangeNothing extends React.Component {

  render() {
    // Import mock data
    // Requires server call to get list of stories and users from server
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;
    
    return (
      <div className="profileHomeInterface">
        <UserIconMedium username={this.props.app.state.currUser.username} icon={this.props.app.state.currUser.icon} />
      </div>
    )
  }
}

export default ChangeNothing;
