import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { io } from "socket.io-client";
import ENV from "./../../config.js";
import "./dropDown.css";
import {
  menuRedirect,
  logout,
  startGame
} from "../../actions/dashboard/menu.js";
import { getUser } from "../../actions/global/users.js";

class DropDown extends React.Component {
  state = {
    selected: "",
    user: {
      username: "",
      icon: "avatar01.png",
      stories: []
    }
  };

  componentDidMount() {
    getUser(this, this.props.app);
  }

  render() {
    const socket = io(ENV.api_host);
    const items = this.props.items;
    const label = this.props.label ? this.props.label : "<GENRE>";

    const handleChange = event => {
      this.setState({ selected: event.target.value });

      if (this.state.user) {
        // User and room emit
        socket.emit("join-room", {
          user: {
            username: this.state.user.username,
            icon: this.state.user.icon,
            score: 0,
            host: false
          },
          room: event.target.value
        });
        socket.on("room-users", ({ room, users, rooms }) => {
          users[0].host = true;
          socket.emit("change-host", users);
          this.props.app.setState({
            page: 2,
            users: users
          });
        });
      }
    };

    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={this.state.selected}
          label={label}
          onChange={handleChange}
        >
          {" "}
          {items.map(item => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

export default DropDown;
