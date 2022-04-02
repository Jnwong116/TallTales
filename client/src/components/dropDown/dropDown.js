import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { io } from "socket.io-client";
import ENV from './../../config.js';
import "./dropDown.css";
import {
  menuRedirect,
  logout,
  startGame
} from "../../actions/dashboard/menu.js";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    };
  }

  render() {
    const socket = io(ENV.api_host);
    const items = this.props.items;
    const label = this.props.label ? this.props.label : "<GENRE>";
    const user = this.props.user ? this.props.user : {};

    const handleChange = event => {
      this.setState({ selected: event.target.value });

      if (user) {
        // User and room emit
        socket.emit("join-room", {
          user: user,
          room: event.target.value
        });
        socket.on("room-users", ({ room, users, rooms }) => {
          if (rooms[room].length == 1) {
            users[0].host = true;
            this.props.app.state.currUser.host = true;
          }
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
