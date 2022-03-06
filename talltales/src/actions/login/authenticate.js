// const log = console.log

export const login = (app, users) => {
  const currUserName = document.getElementById("user-name").value;
  const currPassword = document.getElementById("password").value;

  const targetUser = users.users.filter(
    user => user.username === currUserName
  );

  if (targetUser.length && targetUser[0].password === currPassword) {
    app.setState({
      currUser: targetUser[0]
    });
  } else {
    window.alert("Incorrect login :(");
  }
}