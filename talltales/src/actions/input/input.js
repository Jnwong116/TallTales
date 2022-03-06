export const saveInput = (user) => {
    let input = document.getElementById("user-input").value;
        // Adds period to end of sentence if user hasn't.
        if (input.charAt(input.length - 1) !== ".") {
          input = input + ".";
        }
        
        document.getElementById("user-input").value = "";
    user.currentSentence = input;
  }