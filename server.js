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

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*"
  }
});

// Loads socket functions
const roomHandler = require('./socket/roomHandler');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/client/build")));

const userRouter = require("./routes/users");
const storyRouter = require("./routes/stories");
const roomRouter = require("./routes/rooms");

app.use("/users", userRouter);
app.use("/stories", storyRouter);
app.use("/rooms", roomRouter);

app.get("*", (req, res) => {
  const pageRoutes = ["/"];
  if (!pageRoutes.includes(req.url)) {
    res.status(404);
  }

  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});


io.on("connection", socket => {
  roomHandler(io, socket);

  socket.on("create-room", newRoom => {
    console.log(newRoom);
    io.emit("created-room", newRoom);
  });

  socket.on("update-rooms", changedRooms => {
    rooms = changedRooms;
  });

  socket.on("update-raconteur", ({ raconteur, prev }) => {
    updateRaconteur(raconteur, prev);
  })

  socket.on("start-game", ({ room, storyStart, storyPrompts, users }) => {
    io.to(room).emit("game-started", {
      storyStart: storyStart,
      storyPrompts: storyPrompts,
      users: users,
      rooms: rooms,
      room: room
    });
  });

  socket.on("update-sentence", ({ room, users }) => {
    saveInput(users, room);
    // Checks if all users have updated their sentence
    if (allUsersInput(users)) {
      // log('all-users')
      io.to(room).emit("all-users-input", {
        users: users
      });
    } else {
      io.to(room).emit("update-users", {
        users: users
      });
    }
  });

  socket.on("raconteur-vote", ({ room, users, story }) => {
    io.to(room).emit("receive-vote", {
      users: users,
      story: story
    });
  });

  socket.on("update-story", ({ room, story, prompt, stage, users }) => {
    // Updates serverside list of users
    io.to(room).emit("story-updated", {
      story: story,
      prompt: prompt,
      stage: stage,
      users: users
    });
  });

  socket.on("saved-story", ({ room, story }) => {
    rooms[room] = false;
    log(rooms);
    io.to(room).emit("story-saved", {
      story: story
    });
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    log(`${socket.id} disconnected`);
    const currUser = getCurrentUser(socket.id);

    if (currUser) { // User exists
      userLeave(socket.id); 
      // Checks if user was part of in progress game
      if (rooms[currUser.room]) { // Game was in progress
        if (getRoomUsers(currUser.room).length === 1) { // If they are last person left in the room
          rooms[currUser.room] = false;
          const users = getRoomUsers(currUser.room);
          users[0].host = true;
          io.to(currUser.room).emit("game-forfeit", {
            users: users,
            str: "The game has ended since all players left",
            room: currUser.room
          });
          io.to(socket.id).emit("stop-audio");
        }

        // Checks if user was raconteur
        else if (currUser.raconteur) { // User was raconteur
          io.to(currUser.room).emit("raconteur-left", {
            users: getRoomUsers(currUser.room),
            str: `${currUser.username} was the raconteur and they left`
          });
        }

        else { // User was not raconteur
          io.to(currUser.room).emit("user-left", {
            users: getRoomUsers(currUser.room),
            str: `${currUser.username} has left the game`
          });

          if (allUsersInput(getRoomUsers(currUser.room))) {
            io.to(currUser.room).emit("all-users-input", {
              users: getRoomUsers(currUser.room)
            });
          }
        }
      }

      else { // Game was not in progress
        if (getRoomUsers(currUser.room).length === 0) { // They were last person in the lobby
          io.emit("destroy-room", {
            room: currUser.room
          });
        }

        else {
          io.to(currUser.room).emit("update-users", { // Updates the lobby
            room: currUser.room,
            users: getRoomUsers(currUser.room),
            rooms: rooms
          });
          io.emit("update-db", { // Updates the join rooms list
            users: getRoomUsers(currUser.room),
            room: currUser.room
          })
        }
      }
    }
  });
});

server.listen(port, () => {
  log(`listening on port ${port}...`);
});
