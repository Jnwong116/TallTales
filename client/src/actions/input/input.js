import { getCurrentUser } from "../global/users";
import { updateSentence } from "../sockets/updateUser";

export const saveInput = (app) => {
    let input = document.getElementById("user-input").value;
    input = input.trim();
        // Adds period to end of sentence if user hasn't.
        if (input.charAt(input.length - 1) !== ".") {
          input = input + ".";
        }
        
        document.getElementById("user-input").value = "";
    
    const user = getCurrentUser(app, true);
    const users = app.state.users;
    users[user].currentSentence = input;

    updateSentence(users);

    app.setState({
      page: 1
    });
}