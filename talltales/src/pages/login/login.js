import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import "./login.css";

class Login extends React.Component {

    render() {

        return (
            <div className="login-page">
                <div className="login-header">
                    <AppName></AppName>
                </div>
                <UserLoginInput text="LOGIN"></UserLoginInput>
                <TextButton text="<ENTER TO PLAY>" 
                    handleClick={() => {window.alert('LOGIN!');}}>
                </TextButton>
                <div className="signup-message">
                    NEW? SIGN UP 
                    <strong 
                        className="signup-link"
                        onClick={() => {window.alert('SIGNUP!')}}
                    > HERE</strong>!
                </div>
            </div>
        );
    }
}

export default Login;