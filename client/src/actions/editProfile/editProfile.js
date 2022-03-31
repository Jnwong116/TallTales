import { errorToast } from "../../actions/toastify/toastify.js";

export const changeName = (users, app, page) => {
    // Gets passed in array of users from database
    const newName = document.getElementById('change-username').value;
    const currUser = app.state.currUser.username;

    if (newName === "") {
        errorToast("username can't be blank!");
        return;    
    }

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].username === currUser) {
            // Requires server call to change user's username
            users.users[i].username = newName;
        }
    }

    page.setState({
        loading: false
    })

}

export const changePassword = (users, app, page) => {
    // Gets passed in array of users from database
    const newPass = document.getElementById('change-password').value;
    const currUser = app.state.currUser.username;

    if (newPass === "") {
        errorToast("password can't be blank!");
        return;    
    }

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].username === currUser) {
            // Requires server call to change user's password
            users.users[i].password = newPass;
        }
    }

    page.setState({
        loading: false
    })

}

export const changeAvatar = (users, app, page, avatar) => {
    // Gets passed in array of users from database
    const currUser = app.state.currUser.username;

    for (let i = 0; i < users.users.length; i++) {
        if (users.users[i].username === currUser) {
            // Requires server call to change user's avatar
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
        case '1':
            newAvatar = 4
            break;
        default: 
            newAvatar = parseInt(currAvatar) - 1
            break;
    }

    page.setState({
        avatar: "avatar0" + newAvatar + ".png"
    })
}

export const nextAvatar = (avatar, page) => {
    const currAvatar =  avatar.charAt(7);
    let newAvatar;
    
    switch (currAvatar) {
        case '4':
            newAvatar = 1
            break;
        default: 
            newAvatar = parseInt(currAvatar) + 1
            break;
    }

    page.setState({
        avatar: "avatar0" + newAvatar + ".png"
    })
}