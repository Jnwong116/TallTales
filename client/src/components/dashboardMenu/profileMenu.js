import React from "react";
import Button from "../button/button.js";
import "./dashboardMenu.css";

import { menuRedirect } from "../../actions/dashboard/menu.js";

class ProfileMenu extends React.Component {
  render() {
    // Import mock data
    this.stories = this.props.app.state.stories;
    this.users = this.props.app.state.users;

    return (
      <span className="dashboardMenu">
        
        <Button text="COMPLETED STORIES"
                handleClick={() => {
                  menuRedirect(this.props.app, 6)}} />
        <Button text="CHANGE USERNAME"
                handleClick={() => {
                  menuRedirect(this.props.app, 7)}} />
        <Button text="CHANGE PASSWORD"
                handleClick={() => {
                 menuRedirect(this.props.app, 8)}} />
        <Button text="CHANGE AVATAR"
                handleClick={() => {
                 menuRedirect(this.props.app, 9)}} />
        <Button text="BACK"
                handleClick={() => {
                  menuRedirect(this.props.app, 4)}} />
      </span>
    )
  }
}

export default ProfileMenu
