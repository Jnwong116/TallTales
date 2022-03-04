import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import { Link } from "react-router-dom";

import "./login.css";

class Login extends React.Component {

    render() {

        return (
            <div className="login-page">
                <div className="login-header">
                    <AppName></AppName>
                </div>
                <UserLoginInput text="LOGIN"></UserLoginInput>
                
                <Link to={{
                    pathname: '/lobby'
                }} className="link">
                    <TextButton text="<ENTER TO PLAY>" />
                </Link>
                
                
                <div className="signup-message">
                    NEW? SIGN UP 
                    <Link to={{
                        pathname: '/register'
                    }} className="link">
                        <strong 
                            className="signup-link"
                        > HERE</strong>!
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default Login;