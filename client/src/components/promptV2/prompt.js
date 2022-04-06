import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import "./prompt.css";

class PromptV2 extends React.Component {
  render() {
    const { title, content, host } = this.props;
    return (
      <div className="promptContainer">
        <span className="promptLeft">
          {host ? (<button type="submit" onClick={() => console.log("edit prompt")}><EditIcon /></button>) : (<span />) }
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
          {host ? (<button type="submit" onClick={() => console.log("delete prompt")}><ClearIcon /></button>) : (<span />) }
        </span>
      </div>
    );
  }
}
export default PromptV2;
