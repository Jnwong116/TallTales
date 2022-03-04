import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import "./register.css";

class Register extends React.Component {

    writeUsersToFile(newUsers) {
        
    }

    handleClick(users) {
        const currUserName = document.getElementById("user-name").value;
        const currPassword = document.getElementById("password").value;
        const numAvatars = 4;
        // numAvatars is used to randomly assign avatar in range avatar01 -> avatarnumAvatars

        const newUser = {
            "username": currUserName,
            "password": currPassword,
            "score": 0,
            "icon": "avatar0" + (Math.ceil(Math.random() * (numAvatars))).toString() + ".png",
            "sentence": "",
            "raconteur": false,
            "host": false,
            "currentSentence": ""
        }

        users.users.push(newUser);
        console.log(users);
    }

    render() {
        // import data
        this.users = require("./../../data/users.json");

        return (
            <div className="register-page">
                <div className="register-header">
                    <AppName showTagline></AppName>
                </div>
                <UserLoginInput text="REGISTER"></UserLoginInput>
                <TextButton text="<CONFIRM REGISTRATION>" 
                    handleClick={() => {this.handleClick(this.users)}}>
                </TextButton>
            </div>
        );
    }
}

export default Register;