import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";

class ChangePassword extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
          <span>
          <input type="text" name="newUserName" placeholder="<New Password>" />
          </span>
        </div>

        <div className="profileInputButton">
          <Button text="CHANGE PASSWORD"
                  handleClick={() => {
                  this.handleClick(this.state);}} />
        </div>
      </div>
    )
  }
}

export default ChangePassword;
