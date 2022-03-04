import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import { Link } from "react-router-dom";

import "./register.css";

class Register extends React.Component {

    render() {
        return (
            <div className="register-page">
                <div className="register-header">
                    <AppName></AppName>
                </div>
                <UserLoginInput text="REGISTER"></UserLoginInput>
                <Link to={{
                    pathname: '/'
                }} className="link">
                    <TextButton text="<CONFIRM REGISTRATION>" 
                        handleClick={() => {}}>
                    </TextButton>
                </Link>
                
            </div>
        );
    }
}

export default Register;