import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";
import TextField from "@mui/material/TextField";

class ChangePassword extends React.Component {

  render() {
    // Import mock data
    this.usersData = require("./../../data/users.json");

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
                  this.handleClick(this.state);}} />
        </div>
      </div>
    )
  }
}

export default ChangePassword;
