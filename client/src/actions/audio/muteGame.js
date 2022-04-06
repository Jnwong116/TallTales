export const handleMute = (app, audioRefs) => {
    if(app.state.muted) {
        app.setState( { muted: false });
        audioRefs.forEach((audioRef) => {
            audioRef.audioEl.current.muted = false;
        })
        
    }
    else {
        app.setState( { muted: true });
        audioRefs.forEach((audioRef) => {
            audioRef.audioEl.current.muted = true;
        })
    }
}