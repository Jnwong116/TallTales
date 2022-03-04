import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import { Link } from "react-router-dom";

import "./login.css";

class Login extends React.Component {

    handleClick(users) {
        const currUserName = document.getElementById("user-name").value;
        const currPassword = document.getElementById("password").value;

        const targetUser = users.users.filter(user => user.username === currUserName);

        if(targetUser.length && targetUser[0].password === currPassword) {
            window.alert("Successful login!");
        }
        else {
            window.alert("Incorrect login :(");
        }
    }

    render() {
        // import data
        this.users = require("./../../data/users.json");

        return (
            <div className="login-page">
                <div className="login-header">
                    <AppName showTagline></AppName>
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