import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";
import TextField from "@mui/material/TextField";

import { changePassword } from "../../actions/editProfile/editProfile";

class ChangePassword extends React.Component {

  render() {
    // Import mock data
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
          <TextField
                id="change-password"
                label="<NEW-PASSWORD>"
                variant="filled"
                margin="normal"
                maxRows="1"
            />
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
