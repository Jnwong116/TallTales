// const log = console.log

export const addUser = (app, users) => {
    const currUserName = document.getElementById("user-name").value;
    const currPassword = document.getElementById("password").value;
    // numAvatars is used to randomly assign avatar in range avatar01 -> avatarnumAvatars
    const numAvatars = 4;

    if(currUserName === "") {
        window.alert("Username is blank :O");
        return;    
    }

    if(currPassword === "") {
        window.alert("Password is blank :O");
        return;
    }
    
    const existingUser = users.users.filter(
        user => user.username === currUserName
    );

    if(existingUser.length) {
        window.alert("Username is already taken :(");
        return;
    }
    

    const newUser = {
        "username": currUserName,
        "password": currPassword,
        "score": 0,
        "icon": "avatar0" + (Math.ceil(Math.random() * (numAvatars))).toString() + ".png",
        "sentence": "",
        "raconteur": false,
        "host": false,
        "currentSentence": ""
    }

    users.users.push(newUser);

    app.setState({
        page: 0
    });
}