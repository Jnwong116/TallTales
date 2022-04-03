import { socket } from "./socket";
// const log = console.log;

export const startGame = (app, start, prompts) => {
    socket.emit("start-game", {
      room: app.state.users[0].room,
      storyStart: start,
      storyPrompts: prompts
    });
  };
  
  export const gameStarted = (app) => {
    socket.on("game-started", ({ storyStart, storyPrompts }) => {
      app.setState({
        story: {
          start: storyStart,
          story: storyStart,
          contributions: [],
          prompt: storyPrompts
        },
        page: 0,
        prompt: 0,
        stage: 0
      });
    });
  };
  