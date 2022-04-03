"use strict";
const log = console.log;

const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const { mongoose } = require("./db/mongoose");
const MongoStore = require("connect-mongo");
const { ObjectID } = require("mongodb");

require("dotenv").config({ path: path.resolve(__dirname, "../config.env") });

const env = process.env.NODE_ENV;
const port = process.env.PORT;

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/client/build")));

const userRouter = require("./routes/users");
const storyRouter = require("./routes/stories");

app.use("/users", userRouter);
app.use("/stories", storyRouter);

app.get("*", (req, res) => {
  const pageRoutes = ["/"];
  if (!pageRoutes.includes(req.url)) {
    res.status(404);
  }

  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// HELPERS
// TODO: Move to utils

let users = [];
let rooms = {
  room1: [],
  room2: [],
  room3: [],
  room4: []
};

// Join user to chat
function userJoin(
  id,
  username,
  icon,
  score,
  raconteur,
  currentSentence,
  host,
  room
) {
  const user = {
    id,
    username,
    icon,
    score,
    raconteur,
    currentSentence,
    host,
    room
  };

  users.push(user);
  rooms[room].push(username);

  return user;
}

function getCurrentUser(id) {
  return users.find(user => user.id === id);
}
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

function userLeave(id) {
  const usersIndex = users.findIndex(user => user.id === id);
  if (usersIndex !== -1) {
    return users.splice(usersIndex, 1)[0];
  }
}

io.on("connection", socket => {
  // Join user to room
  socket.on("join-room", ({ user, room }) => {
    const currUser = userJoin(
      socket.id,
      user.username,
      user.icon,
      user.score,
      user.raconteur,
      user.currentSentence,
      user.host,
      room
    );
    socket.join(currUser.room);
    io.emit("message", `${currUser.username} has joined ${currUser.room}`);
    io.to(currUser.room).emit("room-users", {
      room: currUser.room,
      users: getRoomUsers(currUser.room),
      rooms: rooms
    });
  });

  socket.on("change-host", changedUsers => {
    users = changedUsers;
  });

  socket.on("start-game", ({ room, storyStart, storyPrompts }) => {
    // console.log(room);
    io.to(room).emit("game-started", {
      storyStart: storyStart,
      storyPrompts: storyPrompts
    });
  });

  socket.on("updateRaconteur", ({ room, users }) => {});

  // Runs when client disconnects
  socket.on("disconnect", () => {
    log(`${socket.id} disconnected`);
    const currUser = userLeave(socket.id);
    if (currUser) {
      io.to(currUser.room).emit("room-users", {
        room: currUser.room,
        users: getRoomUsers(currUser.room),
        rooms: rooms
      });
    }
  });
});

server.listen(port, () => {
  log(`listening on port ${port}...`);
});
