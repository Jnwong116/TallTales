export const findRaconteur = (users) => {
    // Gets passed in array of users from database
    for (let i = 0; i < users.length; i++) {
        if (users[i].raconteur === true) {
            return i
        }
    }
}

export const chooseRaconteur = (users) => {
    // Gets passed in array of users from database
    let prev = findRaconteur(users);
    // Requires server call to make user not raconteur
    users[prev].raconteur = false;

    // Choose next user to be raconteur
    // If raconteur was last user in array, loop back to front of array
    if (prev === users.length - 1) {
        // Requires server call to make user raconteur
        users[0].raconteur = true;
    }

    else {
        // Requires server call to make user raconteur
        users[prev + 1].raconteur = true;
    }
}