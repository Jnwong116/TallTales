export const stop = (audio) => {
    for (let i = 0; i < audio.length; i++) {
        audio[i].audioEl.current.pause();
        audio[i].audioEl.current.currentTime = 0;
    }
}