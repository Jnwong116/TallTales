import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";

import { changeName } from "../../actions/editProfile/editProfile";

class ChangeName extends React.Component {
  render() {
    // Import mock data
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
          <span>
          <input type="text" id="change-username" name="newUserName" placeholder="<New Username>" />
          </span>
        </div>

        <div className="profileInputButton">
          <Button text="CHANGE USERNAME"
                  handleClick={() => {
                  changeName(this.users, this.props.app, this.props.parent)}} />
        </div>
      </div>
    )
  }
}

export default ChangeName;
