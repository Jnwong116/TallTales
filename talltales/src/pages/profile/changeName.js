import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";

class ChangeName extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
          <span>
          <input type="text" name="newUserName" placeholder="<New Username>" />
          </span>
        </div>

        <div className="profileInputButton">
          <Button text="CHANGE USERNAME"
                  handleClick={() => {
                  this.handleClick(this.state);}} />
        </div>
      </div>
    )
  }
}

export default ChangeName;
