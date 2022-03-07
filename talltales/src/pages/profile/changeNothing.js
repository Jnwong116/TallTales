import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";
import UserIconMedium from "../../components/userIcon/userIconMedium.js";

class ChangeNothing extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="profileHomeInterface">
        <UserIconMedium icon="avatar01.png" />
      </div>
    )
  }
}

export default ChangeNothing;
