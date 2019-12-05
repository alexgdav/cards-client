### DECKARD
#### YOUR NEW STUDY GUIDE
This is the front end/client repo for the DECKARD application, a project built by Alex Davidenko in General Assembly's Software Engineering Immersive. DECKARD is a single-page application, where users can create and interact with flashcards to help in their studies.

Users do not need to create an account to browse the existing decks or use the flashcards created by other users. An account is required for creating subject decks, and creating custom flashcards for
those decks. Users may edit or delete the flashcards they've created, and delete their associated decks.

An optional timer is available to be used with the flashcards. It may be set to the desired time and will count down while you study.

##### (For security reasons, please use a placeholder email and password to make an account on Deckard. Do not use real credentials you use anywhere else)
##### (The sections below cover the front end only. Please check out the [Back End GitHub Repository](https://github.com/alexgdav/cards-api) for the Deckard API tech stack, stretch goals and planned fixes, and the back end development process)
### ABOUT THE FRONT END
DECKARD is built with Javascript and React. Resources are queried with Axios, and displayed via
JSX in React components. Styling is done with a mixture of Bootstrap components and CSS/SASS.
### LINKS
- [Deployed App](https://alexgdav.github.io/cards-client/)
- [Deployed Back End At Heroku](https://glacial-eyrie-35831.herokuapp.com/)
- [Back End GitHub Repository](https://github.com/alexgdav/cards-api)
### TECHNOLOGIES USED (FRONT END)
- Atom
- Axios
- Bootstrap
- CSS/SASS
- Javascript
- React
- React Bootstrap
- React Router
### DECKARD IN ACTION

<a href="https://seidavbucket.s3.amazonaws.com/project4/signedoutlanding.png"><img src="https://seidavbucket.s3.amazonaws.com/project4/signedoutlanding.png" title="Logged out landing page" /></a>

<a href="https://seidavbucket.s3.amazonaws.com/project4/usingcard.png"><img src="https://seidavbucket.s3.amazonaws.com/project4/usingcard.png" title="Using a card deck" /></a>

### SETUP INSTRUCTIONS
- clone or download this repo
- install dependencies with `npm install`
- use `npm run start` to run locally

### FRONT END PLANNING, DEVELOPMENT PROCESS & PROBLEM SOLVING STRATEGIES
TODO: PLANNING AND DEVELOPMENT PROCESS TEXT
### USER STORIES
- as a logged-out user, I’d like to view all the available flashcard subjects/decks and cards
- as a logged-out user, I’d like to be able to log in
- as a logged-in user, I’d like to be able to change my password
- as a logged-in user, I’d like to be able to create a new subject/deck
- as a logged-in user, I’d like to be able to edit my deck(s)
- as a logged-in user, I’d like to be able to delete my deck(s)
- as a logged-in user, I’d like to be able to add a new card to a deck
- as a logged-in user, I’d like to be able to edit my cards
- as a logged-in user, I’d like to be able to delete my cards
- as a logged-in user, I’d like to be able to log out
### WIREFRAMES
#### SIGNED IN VIEW
<a href="https://imgur.com/FSngKXp"><img src="https://i.imgur.com/FSngKXp.png" title="signed in view" /></a>
#### CREATE NEW CARD VIEW
<a href="https://imgur.com/9ZUucGL"><img src="https://i.imgur.com/9ZUucGL.png" title="create new card" /></a>
### PLANNED FIXES AND FUTURE FEATURES
- allowing a user to view only their own decks
- allowing a user to favorite cards or decks created by others, and to add others'
cards to their own decks
#### ACKNOWLEDGEMENTS
Thank you to the students and instructors of SEI-05!
