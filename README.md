# team19

GENERAL GAME DESCRIPTION
========================

Tall Tales is a multiplayer collaborative story-telling web app for 3-6 players, inspired by popular party-games such as the Jackbox Party Packs, Code Names, Garticphone, and Skribbl.io. The basic gameplay consists of providing the players with creative prompts for sentences. Each round, one of the players serves as the Raconteur, who decides which sentence is the funniest or most appropriate to continue the story. After all rounds (divided into basic story elements: backstory, conflict, resolution) are completed, the player with the highest score is crowned as the most valuable contributor, and the collaborative story is displayed for all to see, as well as stored for later retrieval via their user profile.

REGISTERED USERS
================

We have set up a number of users to demo the app more convincingly. They are listed below in the username:password format. (Since the usernames play an important part in our app, and a story featuring Jordan and Jasper is more interesting than a story featuring user1 and user2, we decided not to go with the suggested user1, user2, etc., convention.)

	user:user
	admin:admin
	gazi:gazi
	jasper:jasper
	jordan:jordan
	chris:chris

Of course, new users are also able to create their own accounts. More on that later.

USAGE INSTRUCTIONS
==================

We've coded the game in React, so all that's needed to get it to run is to pull our code from the main branch, and start up a development server with the usual `npm start`.

 0. A Note on Concurrency

	Since our final game will rely heavily on concurrency, and we did not have time to learn/master the concepts required, we are simulating gameplay through rudimentary AI written in Javascript. More on that below.

 1. Login Page

	Upon loading the page (default address: http://localhost:3000/), we are presented with a login screen. We must enter our username/password in the brown input fields, and click `ENTER TO PLAY` to proceed to the Lobby (TODO: Dashboard). Alternatively, new users may click the sign up link below to proceed to the Sign Up Page. 

 2. Sign Up Page

	Users are asked to enter a new username and password, and click the `CONFIRM REGISTRATION` link. This will temporarily add a new user to our javascript database (to be upgraded to a real database at a later stage), and bring the user back to the Login page, where they must enter their new credential to proceed.

 3. Lobby

	The lobby displays all currently logged in users. Since we haven't implemented concurrency yet, this is currently done via mock data. Here we are prompted to select the story genre (currently only Adventure and Mystery are available, though we may add more genres further down the line) that we want our prompts to be about. Once that's done, we can click `Start Game` to proceed to the Gameplay View.

 4. Gameplay View
	
	4.1 As a Normal Player

		The gameplay view features a score in the top-right corner, which keeps track of the current player's score. In the middle of the screen we have our story thus far, which begins with a pre-generated snippet from our mock database. The player is given a prompt, starting with the backstory, and they are prompted to type in their sentence in the input field labeled `OKAY AND THEN...`. Once they've done so, they can click the `SUBMIT` button. After every player has submitted their sentence, the game will select a Raconteur, who will select their favorite submission to be chosen for formal addition to the story. (We are currently simulating this via rudimentary AI coded in Javascript.) The Raconteur will be identified by the text `USER's turn`, where USER is the current Raconteur. The current user will also see the chosen sentence via interface cues. The winning sentence is then added to the story, the winning player's score is increased, and a new round begins. 

    4.2 As a Raconteur

		It is inevitable that we will be selected as the Raconteur at some point. When that is the case, we must first wait for all the users to submit their sentences. Users who are still writing their sentences are indicated by `...` next to their avatars. (We have currently implemented a short timer to simulate this.) Once everyone's sentences have been submitted, we can see them all in our view, in the brown fields next to each respective user's avatar. We then select our favorite by clicking on it. The selection is reflected at the very bottom of the page, next to the `YOUR CHOICE` interface element. We have a chance to change our mind by selecting a different sentence. Once we've made our decision, we can click the checkmark to mark our formal approval. The new sentence is added to the story, and a new gameplay round begins.

 5. Leaderboard View

	Once the game has concluded, we have a final screen displaying each player's score, where the user with the highest score is displayed most prominently. We are also displaying the story one more time for all to see. We can click the `DONE` button to indicate that we've finished playing. This takes us back to the dashboard.

THANK YOU FOR CHECKING OUT OUR GAME :-)
=======================================