import React from "react";
import { handleMute } from "../../actions/audio/muteGame";

import "./muteButton.css";

class MuteButton extends React.Component {
    render() {
        return (
            <div className="mute-button">
                {(this.props.app.state.muted) ? 
                    <img src={require("../../assets/images/volume_off.png")} alt="volume" onClick={() => handleMute(this.props.app, this.props.audioRef)}></img> :
                    <img src={require("../../assets/images/volume_on.png")} alt="volume" onClick={() => handleMute(this.props.app, this.props.audioRef)}></img>
                } 
            </div>
        )
    }
}

export default MuteButton;