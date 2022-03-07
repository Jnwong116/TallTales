# team19

GENERAL GAME DESCRIPTION
========================

Tall Tales is a multiplayer collaborative story-telling web app for 3-6 players, inspired by popular party-games such as the Jackbox Party Packs, Code Names, Gartic Phone, and Skribbl.io. The basic gameplay consists of providing the players with creative prompts for sentences. Each round, one of the players serves as the Raconteur, who decides which sentence is the funniest or most appropriate to continue the story. There are a total of 10 rounds, divided into several basic story elements: backstory, conflict, resolution. After all rounds are completed, the player with the highest score is crowned as the most valuable contributor. Additionally, the collaborative story is displayed for all to see, as well as stored for later retrieval via their user profile.

REGISTERED USERS
================

We have set up a number of users to demo the app more convincingly. They are listed below in the username:password format. (Since the usernames play an important part in our app, we decided to go with example accounts titled gazi, jasper, jordan, chris, etc. instead of the suggested user1, user2, convention.)

	user:user
	admin:admin
	jordan:jordan
	chris:chris

Of course, new users are also able to create their own accounts. More on that later.

DATA INFORMATION
==================
For the purposes of Phase 1, we hard-coded mock data into our json files so that we would not have to copy and paste the same mock data into every game page. With our implemention, we update the data used in our game by passing in modified data through the React app states. Note that we did not save or change the actual json files, as instructed in the Phase 1 handout.

USAGE INSTRUCTIONS
==================

We've coded the app using React, so all that's needed to get it to run is to pull our code from the main branch and start up a development server with the usual `npm start`.

 0. A Note on Concurrency

	Our final game will rely heavily on concurrency, however, due to the time constraints of Phase 1, we are currently simulating multiplayer gameplay through a rudimentary AI written in JavaScript. In Phase 2, we will be learning, mastering, and implementing the concurrency concepts into our code. More on that on the respective gameplay pages.

 1. Login Page

	Upon loading the page (default address: http://localhost:3000/), we are presented with a login screen. We must enter our username/password in the input fields, and click `ENTER TO PLAY` to proceed to the Lobby. The program will check that a valid username and password is provided before allowing access into the game. Alternatively, new users may click the sign up link below to proceed to the Sign Up Page.
	
	For testing: Login with any of the pre-mentioned login credentials.

 2. Sign Up Page

	Users are asked to enter a new username and password, and click the `CONFIRM REGISTRATION` link. This will temporarily add a new user to our javascript database (to be upgraded to a real database at a later stage), and bring the user back to the Login page, where they must enter their new credential to proceed. The program will check that neither the username nor password is empty, and that the username is not already taken.

 3. Dashboard

	In the dashboard view, we are presented with a button menu and a collection of the past stories that we have created. The stories can be seen under the `COMPLETED STORIES` header and can be browsed by clicking the small arrows to the left and right of it. The menu is fairly straightforward; it allows us to host a new game, join an existing game, view gameplay instructions, access our personal profile, and log out of the game. 

    TODO: We are thinking of adding more gameplay stats here, such as how many sentences we contributed to each of the stories, which sentences we contributed (they could be made visually distinct from the rest), what our score was for a particular story, who the winner of that game was, which players contributed, etc. This information could also be made available on a public-facing profile, so that other users could browse our stories and related statistics.
    
	For testing: Browse through the page, try some of the features out!

 4. Dashboard - How To Play

	This page displays some simple instructions on how to play the game for new users.

 5. Profile

	The profile page provides us with an additional button menu allowing us to customize our username, password, avatar, or to go back to the dashboard.

 6. Profile - Change Username (self-explanatory)

 7. Profile - Change Password (self-explanatory)

 8. Profile - Change Avatar

	We may browse through available avatars by clicking the small arrows to the left and right of it, after which we can click the `CHANGE AVATAR` button to select it as our new avatar.

 9. Lobby (Host New Game)

	The lobby displays all currently logged in users. Since we haven't implemented concurrency yet, this is currently done via mock data. Only one user may host a game at a time. Here we are prompted to select the story genre (currently only Adventure and Mystery are available, though we may add more genres further down the line) that we want our prompts to be about. Once that's done, we can click `Start Game` to proceed to the Gameplay View.

	Note: For phase 1, admin will always be the game host.

10. Gameplay View (Join Game)
	
    10.1. As a Normal Player

	The gameplay view features a score in the top-right corner, which keeps track of the current player's score. In the middle of the screen we have our story thus far, which begins with a pre-generated snippet from our mock database. The player is given a prompt, starting with the backstory, and they are prompted to type in their sentence in the input field labeled `OKAY AND THEN...`. Once they've done so, they can click the `SUBMIT` button. After every player has submitted their sentence, the game will select a Raconteur, who will select their favorite submission to be chosen for formal addition to the story. (We are currently simulating this via rudimentary AI coded in Javascript.) The Raconteur will be identified by the text `USER's turn`, where USER is the current Raconteur. The current user will also see the chosen sentence via interface cues. The winning sentence is then added to the story and the winning player's score is increased. From there, a new round begins. 
		
    For testing: Type a random sentence when the game prompts you to. Click submit and play out the game!

    10.2. As a Raconteur

	When we are selected as a Raconteur, we must first wait for all the users to submit their sentences. Users who are still writing their sentences are indicated by `...` next to their avatars. (We have currently implemented a short timer to simulate this.) Once everyone's sentences have been submitted, we can see them all in our view, in the text fields next to each respective user's avatar. We then select our favorite sentence by clicking on it. The selection is reflected at the very bottom of the page, next to the `YOUR CHOICE` interface element. Note that this does not lock in our selection, as we are free to change our mind. Once we've made our decision, we can click the checkmark to mark our formal approval. The new sentence is added to the story, and a new gameplay round begins.
	
    For testing: Select any of the AI-generated sentences and confirm it by clicking the checkmark. Make sure you only make one selection and click the checkmark once to prevent any unintented errors. The screen will change after a few seconds.

11. Leaderboard View

	Once the game has concluded, we have a final screen displaying each player's score, where the user with the highest score is displayed most prominently. We are also displaying the story one more time for all to see. We can click the `DONE` button to indicate that we've finished playing. This takes us back to the dashboard.

THANK YOU FOR CHECKING OUT OUR GAME :-)
=======================================
