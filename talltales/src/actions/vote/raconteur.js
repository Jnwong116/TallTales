export const findRaconteur = (users) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].raconteur === true) {
            return i
        }
    }
}

export const chooseRaconteur = (users) => {
    let prev = findRaconteur(users);
    users[prev].raconteur = false;

    // Choose next user to be raconteur
    // If raconteur was last user in array, loop back to front of array
    if (prev === users.length - 1) {
        users[0].raconteur = true;
    }

    else {
        users[prev + 1].raconteur = true;
    }
}