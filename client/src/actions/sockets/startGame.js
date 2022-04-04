import { socket } from "./socket";
// const log = console.log;

export const startGame = (app, start, prompts) => {
  const users = app.state.users;
  users[0].raconteur = true;

  socket.emit("start-game", {
    room: users[0].room,
    storyStart: start,
    storyPrompts: prompts,
    users: users
  });
};

export const gameStarted = app => {
  socket.on(
    "game-started",
    ({ storyStart, storyPrompts, users, rooms, room }) => {
      rooms[room] = true;
      socket.emit("update-rooms", rooms);
      app.setState({
        story: {
          start: storyStart,
          story: storyStart,
          contributions: [],
          prompt: storyPrompts
        },
        users: users,
        page: 0,
        prompt: 0,
        stage: 0
      });
    }
  );
};
