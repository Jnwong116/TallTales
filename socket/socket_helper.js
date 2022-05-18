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

    return user;
}

function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

function updateRaconteur(raconteur, prevRaconteur) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === raconteur) { // Found the raconteur
            users[i].raconteur = true;
            users[i].currentSentence = "Raconteur";
        }

        if (users[i].username === prevRaconteur) { // Found the previous raconteur
            users[i].raconteur = false;
            users[i].currentSentence = ". . .";
        }
    }
}

function userLeave(id) {
    const usersIndex = users.findIndex(user => user.id === id);
    if (usersIndex !== -1) {
        return users.splice(usersIndex, 1)[0];
    }
}

function allUsersInput(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].currentSentence === ". . .") {
            return false;
        }
    }

    return true;
}

function saveInput(newUsers, room) {
    for (let i = 0; i < newUsers.length; i++) {
        for (let j = 0; j < users.length; j++) {
            if (users[j].username === newUsers[i].username) {
                users[j].currentSentence = newUsers[i].currentSentence;
            }
        }
    }
}

module.exports = { userJoin, getCurrentUser, getRoomUsers, updateRaconteur, userLeave, allUsersInput, saveInput }