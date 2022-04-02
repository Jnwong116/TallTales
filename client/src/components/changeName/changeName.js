import React from "react";
import Button from "../../components/button/button.js";
import TextField from "@mui/material/TextField";

import "./changeName.css";

import { changeName } from "../../actions/editProfile/editProfile";

class ChangeName extends React.Component {
  render() {
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
                  changeName(this.props.app, this.props.parent)}} />
        </div>
      </div>
    )
  }
}

export default ChangeName;
