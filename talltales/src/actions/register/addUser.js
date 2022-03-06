// const log = console.log

export const addUser = (app, users) => {
    const currUserName = document.getElementById("user-name").value;
    const currPassword = document.getElementById("password").value;
    const numAvatars = 4;
    // numAvatars is used to randomly assign avatar in range avatar01 -> avatarnumAvatars

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
}