import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import "./prompt.css";

class PromptV2 extends React.Component {
  render() {
    const { title, content, admin } = this.props;
    return (
      <div className="promptContainer">
        <span className="promptLeft">
          {admin ? (<button className="editButton" type="submit" onClick={() => console.log("edit prompt")}><EditIcon fontSize="small" /></button>) : (<span />) }
        </span>
        <span className="promptMiddle">
          <div className="promptTitle">
            {title}
          </div>
          <div className="promptBody">
            {content}
          </div>
        </span>
        <span className="promptRight">
          {admin ? (<button className="editButton" type="submit" onClick={() => console.log("delete prompt")}><ClearIcon fontSize="small" /></button>) : (<span />) }
        </span>
      </div>
    );
  }
}
export default PromptV2;
