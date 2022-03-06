import React from "react";
import AppName from "../../components/appName/appName.js";
import UserLoginInput from "../../components/userLoginInput/userLoginInput.js";
import TextButton from "../../components/textButton/textButton.js";

import { login, register } from "../../actions/login/authenticate.js";

import "./login.css";

class Login extends React.Component {
  // handleClick(users) {
  //   const currUserName = document.getElementById("user-name").value;
  //   const currPassword = document.getElementById("password").value;

  //   const targetUser = users.users.filter(
  //     user => user.username === currUserName
  //   );

  //   if (targetUser.length && targetUser[0].password === currPassword) {
  //     this.props.app.setState({
  //       currUser: targetUser[0]
  //     });
  //   } else {
  //     window.alert("Incorrect login :(");
  //   }
  // }

  render() {
    // console.log(this.props.app.state)
    return (
      <div className="login-page">
        <div className="login-header">
          <AppName showTagline></AppName>
        </div>
        <UserLoginInput text="LOGIN"></UserLoginInput>

        <TextButton
          text="<ENTER TO PLAY>"
          handleClick={() => {
            login(this.props.app, this.props.app.state.users);
          }}
        ></TextButton>
        <div className="signup-message">
          NEW? SIGN UP
            <strong className="signup-link" onClick={() => {register(this.props.app)}}>
              {" "}
              HERE.
            </strong>
        </div>
      </div>
    );
  }
}

export default Login;
