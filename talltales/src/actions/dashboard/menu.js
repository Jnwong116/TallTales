export const menuRedirect = (app, page) => {
    app.setState({
        page: page,
    })
}

export const logout = (app) => {
    app.setState({
        currUser: null,
        page: 0
    })
}

export const startGame = (host, users, app, page) => {
    if (host) {
        for (let i = 0; i < users.users.length; i++) {
            if (users.users[i].username === app.state.currUser.username) {
                users.users[i].host = true;
            }
        }

        menuRedirect(app, page);
    }   

    else {
        let hosted = false;
        for (let i = 0; i < users.users.length; i++) {
            if (hosted === false) {
                if (users.users[i].username !== app.state.currUser.username) {
                    users.users[i].host = true;
                    hosted = true;
                }
            }
            
        }

        menuRedirect(app, page);
    }
}