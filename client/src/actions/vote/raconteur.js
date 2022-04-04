// const log = console.log

export const findRaconteur = (users) => {
    // log(users);
    for (let i = 0; i < users.length; i++) {
        if (users[i].raconteur === true) {
            return i
        }
    }
    return -1;
}

export const chooseRaconteur = (users) => {
    // log(users);
    let prev = findRaconteur(users);

    if (prev === -1) {
        users[0].raconteur = true;
    }
    
    else {
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

    return users;
}