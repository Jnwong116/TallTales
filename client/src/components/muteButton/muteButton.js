import React from "react";

import "./muteButton.css";

class MuteButton extends React.Component {
    state = {
        muted: false,
    }

    render() {

        const audioRef = this.props.audioRef;

        const handleMute = () => {
            if(this.state.muted) {
                this.setState( { muted: false });
                audioRef.audioEl.current.muted = false;
            }
            else {
                this.setState( { muted: true });
                audioRef.audioEl.current.muted = true;
            }
        }

        return (
            <div className="mute-button">
                {(this.state.muted) ? 
                    <img src={require("../../assets/images/volume_off.png")} alt="volume" onClick={() => handleMute()}></img> :
                    <img src={require("../../assets/images/volume_on.png")} alt="volume" onClick={() => handleMute()}></img>
                } 
            </div>
        )
    }
}

export default MuteButton;