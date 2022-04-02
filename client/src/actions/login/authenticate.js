// const log = console.log
export const login = (app, users) => {
  // Gets passed in array of users from database
  const currUserName = document.getElementById("user-name").value;
  const currPassword = document.getElementById("password").value;
  const targetUser = users.users.filter(user => user.username === currUserName);

  if (!targetUser.length) {
    window.alert("Username does not exist :(");
    return;
  }

  // Requires server call to authenticate user and make sure the password is the same as in the server
  if (targetUser.length && targetUser[0].password === currPassword) {
    app.setState({
      currUser: targetUser[0],
      page: 4
    });
  } else {
    window.alert("Password invalid :(");
  }
};

export const register = app => {
  app.setState({
    page: 1
  });
};
