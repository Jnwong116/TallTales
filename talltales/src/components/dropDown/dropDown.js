import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./dropDown.css";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      genre: ""
    };
  }

  render() {
    const { items } = this.props;

    const handleChange = event => {
      this.setState({ genre: event.target.value });
    };

    return (
      <FormControl fullWidth>
        <InputLabel>{"<GENRE>"}</InputLabel>
        <Select
          value={this.state.genre}
          label="<GENRE>"
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
