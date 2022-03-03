import React from "react";
import TextField from "@mui/material/TextField";


import "./userLoginInput.css";

class UserLoginInput extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <div className="user-login-input">
                <div className="user-login-text">{text}</div>
                <div className="user-input-fields">
                    <TextField
                        id="user-name"
                        label="<user-name>"
                        variant="filled"
                        margin="normal"
                        multiline="true"
                    />
                   <TextField
                        id="user-name"
                        label="<password>"
                        variant="filled"
                        margin="normal"
                        multiline="true"
                    />
                </div>
            </div> 
        );
    }
}

export default UserLoginInput;