import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";

import { changePassword } from "../../actions/editProfile/editProfile";

class ChangePassword extends React.Component {

  render() {
    // Import mock data
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
          <span>
          <input type="text" id="change-password" name="newUserName" placeholder="<New Password>" />
          </span>
        </div>

        <div className="profileInputButton">
          <Button text="CHANGE PASSWORD"
                  handleClick={() => {
                  changePassword(this.users, this.props.app, this.props.parent)}} />
        </div>
      </div>
    )
  }
}

export default ChangePassword;
