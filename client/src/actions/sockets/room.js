import { socket } from "./socket";
import { errorToast, warningToast } from "../toastify/toastify";
import { chooseRaconteur } from "../vote/raconteur";
// import { isRaconteur } from "../prompt/displayPrompt";
import { updateSentence } from "./updateUser";
import { deleteRoom, getGames, updateHost, updateRoomNum } from "../gamesList/rooms"

// const log = console.log;

export const joinRoom = (app, user, room, lobbyMusic, introMusic) => {
  const rooms = {
    games: [],
    app: app,
    user: user,
    room: room,
    lobbyMusic: lobbyMusic,
    introMusic: introMusic
  };
  getGames(rooms);
};

export const socketJoinRoom = (roomsObj) => {
  let roomExists = false;
  for (let i = 0; i < roomsObj.games.length; i++) {
    if (roomsObj.games[i].code === roomsObj.room) {
      roomExists = true;
      break;
    }
  }

  if (!roomExists) {
    errorToast("Room doesn't exist");
    return;
  } 

  socket.emit("join-room", {
    user: {
      username: roomsObj.user.username,
      icon: roomsObj.user.icon,
      score: 0,
      raconteur: false,
      currentSentence: ". . .",
      host: false
    },
    room: roomsObj.room
  });
  roomsObj.lobbyMusic.audioEl.current.play();
  roomsObj.introMusic.audioEl.current.play();
  if (roomsObj.app.state.muted) {
    roomsObj.lobbyMusic.audioEl.current.muted = true;
    roomsObj.introMusic.audioEl.current.muted = true;
  }
}

export const updateRoom = (app, page) => {
  socket.on("update-users", ({ users, room, roomInProgress }) => {
    if (app.state.page === "dashboard" || app.state.page === "gamesList") {
      updateRoomNum(room, users.length, page, app);
      // User is on dashboard
      users[0].host = true;
      socket.emit("change-host", users);
      updateHost(room, users[0].username, page, app);
      app.setState({
        page: "lobby",
        users: users,
        roomInProgress
      });
    } else if (app.state.page === "lobby") {
      // User is on lobby page
      users[0].host = true;
      socket.emit("change-host", users);
      updateHost(room, users[0].username, page, app);
      app.setState({
        users: users,
        roomInProgress
      });
    } else {
      app.setState({
        // Updates current state of users
        users: users,
        roomInProgress
      });
    }
  });
};

export const createNewRoom = rooms => {
  socket.emit("create-room", rooms);
};

export const createdNewRoom = app => {
  socket.on("created-room", newRoom => {
    app.setState({
      rooms: newRoom
    });
  });
};

export const denyRoomAccess = () => {
  socket.on("deny-room-access", s => {
    warningToast(s);
  });
};

export const userLeft = (app) => {
  socket.on("user-left", ({ users, str }) => {
    if (app.state.page !== "leaderboard") { // User is not on leaderboard
      warningToast(str);
      app.setState({
        users: users
      });
    }
  })
}

export const raconteurLeft = (app) => {
  socket.on("raconteur-left", ({ users, str }) => {
    if (app.state.page !== "leaderboard") { // User not on leaderboard page
      // Choose a new raconteur
      chooseRaconteur(users);

      updateSentence(users);

      if (app.state.currUser === users[0].username) { // You are new raconteur
        warningToast(str + " making you Raconteur");
        users[0].currentSentence = "Raconteur";
        app.setState({
          users: users,
          page: "voteStage"
        });
        updateSentence(users);
      }

      else {
        warningToast(str);

        if (app.state.page === "voteStage") { // Already on vote screen
          app.setState({
            users: users,
            page: "inputStage"
          });
          app.setState({ // Rerender vote stage
            page: "voteStage"
          })
        }

        else {
          app.setState({
            users: users,
          })
        }
      }
    }
  })
}

export const forfeitGame = (app, page) => {
  socket.on("game-forfeit", ({ users, str, room }) => {
    if (app.state.page !== "leaderboard") {
      warningToast(str);
      updateRoomNum(room, users.length, page, app);
      updateHost(room, users[0].username, page, app);

      socket.emit("update-users", {
        users: users,
        room: room
      });

      app.setState({
        page: "lobby",
        users: users
      });
    }
  })
}

export const updateNumPlayers = (app, page) => {
  socket.on("update-db", ({ users, room }) => {
    updateRoomNum(room, users.length, page, app);
  })
}

export const destroyRoom = (app, page) => {
  socket.on("destroy-room", ({ room }) => {
    deleteRoom(room, page, app);
  })
}
