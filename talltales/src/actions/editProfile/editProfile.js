export const changeName = (users, app, page) => {
    const newName = document.getElementById('change-username').value;
    const currUser = app.state.currUser.username;

    if (newName === "") {
        window.alert("Username can't be blank :O");
        return;    
    }

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].username === currUser) {
            users.users[i].username = newName;
        }
    }

    page.setState({
        loading: false
    })

}

export const changePassword = (users, app, page) => {
    const newPass = document.getElementById('change-password').value;
    const currUser = app.state.currUser.username;

    if (newPass === "") {
        window.alert("Password can't be blank :O");
        return;    
    }

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].username === currUser) {
            users.users[i].password = newPass;
        }
    }

    page.setState({
        loading: false
    })

}

export const changeAvatar = (users, app, page, avatar) => {
    const currUser = app.state.currUser.username;

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].username === currUser) {
            users.users[i].icon = avatar;
        }
    }

    page.setState({
        loading: false
    })

}

export const prevAvatar = (avatar, page) => {
    const currAvatar =  avatar.charAt(7);
    let newAvatar;
    
    switch (currAvatar) {
        case 1:
            newAvatar = 4
            break;
        default: 
            newAvatar = currAvatar - 1
            break;
    }

    page.setState({
        avatar: "avatar0" + newAvatar + ".png"
    })
}

export const nextAvatar = (avatar, page) => {

}