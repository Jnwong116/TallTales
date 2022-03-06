import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";
import { Link } from "react-router-dom";

import { addUser } from "../../actions/register/addUser.js";

import "./register.css";

class Register extends React.Component {
    // handleClick(users) {
    //     const currUserName = document.getElementById("user-name").value;
    //     const currPassword = document.getElementById("password").value;
    //     const numAvatars = 4;
    //     // numAvatars is used to randomly assign avatar in range avatar01 -> avatarnumAvatars

    //     const newUser = {
    //         "username": currUserName,
    //         "password": currPassword,
    //         "score": 0,
    //         "icon": "avatar0" + (Math.ceil(Math.random() * (numAvatars))).toString() + ".png",
    //         "sentence": "",
    //         "raconteur": false,
    //         "host": false,
    //         "currentSentence": ""
    //     }

    //     users.users.push(newUser);
        
    //     this.props.app.setState({
    //         page: 0
    //     });
        
    // }

    render() {
        // console.log(this.props)
        return (
            <div className="register-page">
                <div className="register-header">
                    <AppName showTagline></AppName>
                </div>
                <UserLoginInput text="REGISTER"></UserLoginInput>
                <Link onClick={() => {addUser(this.props.app, this.props.app.state.users)}} to={{
                    pathname: '/',
                    state: {
                        users: this.props.app.state.users
                    }
                }} className="link">
                    <TextButton text="<CONFIRM REGISTRATION>" />
                </Link>
                
            </div>
        );
    }
}

export default Register;