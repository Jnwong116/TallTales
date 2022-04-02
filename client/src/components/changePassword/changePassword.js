import React from "react";
import Button from "../../components/button/button.js";
import TextField from "@mui/material/TextField";

import "./changePassword.css";

import { changePassword } from "../../actions/editProfile/editProfile";

class ChangePassword extends React.Component {

  render() {
    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
          <TextField
                id="change-password"
                label="<NEW-PASSWORD>"
                type="password"
                variant="filled"
                margin="normal"
                maxRows="1"
            />
        </div>

        <div className="profileInputButton">
          <Button text="CHANGE PASSWORD"
                  handleClick={() => {
                  changePassword(this.props.app)}} />
        </div>
      </div>
    )
  }
}

export default ChangePassword;
