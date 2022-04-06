export const stop = (gameAudioRef, lobbyMusic, introMusic) => {
    gameAudioRef.audioEl.current.pause();
    gameAudioRef.audioEl.current.currentTime = 0;
    lobbyMusic.audioEl.current.pause();
    lobbyMusic.audioEl.current.currentTime = 0;
    introMusic.audioEl.current.pause();
    introMusic.audioEl.current.currentTime = 0;
}