import React from "react";
import "./profile.css";
import Button from "../../components/button/button.js";
import TextField from "@mui/material/TextField";

import { changeName } from "../../actions/editProfile/editProfile";

class ChangeName extends React.Component {
  render() {
    // Import mock data
    // Requires server call to get list of stories and users from server
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <div className="changeUserDetailsInterface">
        <div className="profileInputSection">
            <TextField
                id="change-username"
                label="<NEW-USERNAME>"
                variant="filled"
                margin="normal"
                maxRows="1"
            />
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
