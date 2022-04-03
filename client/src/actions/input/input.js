export const saveInput = (user, app) => {
    let input = document.getElementById("user-input").value;
    input = input.trim();
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