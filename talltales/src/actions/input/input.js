export const saveInput = (user, app) => {
  // Gets passed in array of users from database
    let input = document.getElementById("user-input").value;
        // Adds period to end of sentence if user hasn't.
        if (input.charAt(input.length - 1) !== ".") {
          input = input + ".";
        }
        
        document.getElementById("user-input").value = "";
    
    // Requires server call to add input to user object
    user.currentSentence = input;

    app.setState({
      page: 1
    });
}