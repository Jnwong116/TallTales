import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import "./register.css";

class Register extends React.Component {

    render() {
        return (
            <div className="register-page">
                <div className="register-header">
                    <AppName showTagline></AppName>
                </div>
                <UserLoginInput text="REGISTER"></UserLoginInput>
                <TextButton text="<CONFIRM REGISTRATION>" 
                    handleClick={() => {window.alert('REGISTER!');}}>
                </TextButton>
            </div>
        );
    }
}

export default Register;