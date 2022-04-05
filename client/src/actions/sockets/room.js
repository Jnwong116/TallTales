import { socket } from "./socket";
import { errorToast } from "../toastify/toastify";
import { chooseRaconteur } from "../vote/raconteur";
import { isRaconteur } from "../prompt/displayPrompt";
import { updateSentence } from "./updateUser";

// const log = console.log;

export const joinRoom = (user, room) => {
  socket.emit("join-room", {
    user: {
      username: user.username,
      icon: user.icon,
      score: 0,
      raconteur: false,
      currentSentence: ". . .",
      host: false
    },
    room: room
  });
};

export const updateRoom = app => {
  socket.on("update-users", ({ users, roomInProgress }) => {
    if (app.state.page === "dashboard") {
      // User is on dashboard
      users[0].host = true;
      socket.emit("change-host", users);
      app.setState({
        page: "lobby",
        users: users,
        roomInProgress
      });
    } else if (app.state.page === "lobby") {
      // User is on lobby page
      users[0].host = true;
      socket.emit("change-host", users);
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
    errorToast(s);
  });
};

export const userLeft = (app) => {
  socket.on("user-left", ({ users, str }) => {
    if (app.state.page !== 3) { // User is not on leaderboard
      errorToast(str);
      app.setState({
        users: users
      });
    }
  })
}

export const raconteurLeft = (app) => {
  socket.on("raconteur-left", ({ users, str }) => {
    if (app.state.page !== 3) { // User not on leaderboard page
      // Choose a new raconteur
      chooseRaconteur(users);

      updateSentence(users);

      if (app.state.currUser === users[0].username) { // You are new raconteur
        errorToast(str + " making you Raconteur");
        users[0].currentSentence = "Raconteur";
        app.setState({
          users: users,
          page: 1
        });
        updateSentence(users);
      }

      else {
        errorToast(str);

        if (app.state.page === 1) { // Already on vote screen
          app.setState({
            users: users,
            page: 2
          });
          app.setState({ // Rerender vote stage
            page: 1
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

export const forfeitGame = (app) => {
  socket.on("game-forfeit", ({ users, str }) => {
    errorToast(str);

    app.setState({
      page: 2,
      users: users
    });
  })
}
