import * as React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import "./dropDown.css";

class DropDown extends React.Component {
    constructor() {
        super()
        this.state = {
            genre: ""
        };
    }

    render() {

        const {items} = this.props;

        const handleChange = (event) => {
            this.setState({genre: event.target.value})
        }

        return (
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>{"<GENRE>"}</InputLabel>
                <Select 
                    value={this.state.genre}
                    onChange={handleChange}
                    label="Genre"
                >
                    {items.map((item) => {
                        return(
                            <MenuItem value={item}>{item}</MenuItem>
                        )
                        })
                    }    
                </Select>
            </FormControl>
        )
    }
}

export default DropDown;