import React from "react";

import "./muteButton.css";

class MuteButton extends React.Component {
    render() {

        const audioRef = this.props.audioRef;

        const handleMute = () => {
            if(this.props.app.state.muted) {
                this.props.app.setState( { muted: false });
                audioRef.audioEl.current.muted = false;
            }
            else {
                this.props.app.setState( { muted: true });
                audioRef.audioEl.current.muted = true;
            }
        }

        return (
            <div className="mute-button">
                {(this.props.app.state.muted) ? 
                    <img src={require("../../assets/images/volume_off.png")} alt="volume" onClick={() => handleMute()}></img> :
                    <img src={require("../../assets/images/volume_on.png")} alt="volume" onClick={() => handleMute()}></img>
                } 
            </div>
        )
    }
}

export default MuteButton;