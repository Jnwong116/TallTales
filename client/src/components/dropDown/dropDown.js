import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./dropDown.css";
import { selectGenre } from "../../actions/lobby/lobby";

class DropDown extends React.Component {
  state = {
    selected: ""
  };

  render() {
    const items = this.props.items;
    const label = this.props.label ? this.props.label : "<SELECT GENRE>";

    const handleChange = event => {
      this.setState({ selected: event.target.value });
      selectGenre(this.props.parent, event.target.value);
    };

    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={this.state.selected}
          label={label}
          onChange={handleChange}
          defaultValue={this.props.parent.state.genres[0].genre}
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