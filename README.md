### DECKARD
#### YOUR NEW STUDY GUIDE
This is the front end/client repo for the DECKARD application, a project built by Alex Davidenko in General Assembly's Software Engineering Immersive. DECKARD is a single-page application, where users can create and interact with flashcards to help in their studies.

Users do not need to create an account to browse the existing decks or use the flashcards created by other users. An account is required for creating subject decks, and creating custom flashcards for
those decks. Users may edit or delete the flashcards they've created, and delete their associated decks.

An optional timer is available to be used with the flashcards. It may be set to the desired time and will count down while you study.

##### (For security reasons, please use a placeholder email and password to make an account on Deckard. Do not use real credentials you use anywhere else)
##### (The sections below cover the front end only. Please check out the [Back End GitHub Repository](https://github.com/alexgdav/cards-api) for the Deckard API tech stack, back end stretch goals and planned fixes, and the back end development process)
### ABOUT THE FRONT END
DECKARD is built with Javascript and React. Resources are queried with Axios, and displayed via
JSX in React components. Styling is done with a mixture CSS/SASS and Bootstrap and React Bootstrap components.
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
- React Bootstrap, React Router
### DECKARD IN ACTION

<a href="https://seidavbucket.s3.amazonaws.com/project4/signedoutlanding.png"><img src="https://seidavbucket.s3.amazonaws.com/project4/signedoutlanding.png" title="Logged out landing page" /></a>

<a href="https://seidavbucket.s3.amazonaws.com/project4/usingcard.png"><img src="https://seidavbucket.s3.amazonaws.com/project4/usingcard.png" title="Using a card deck" /></a>

### SETUP INSTRUCTIONS
- clone or download this repo
- install dependencies with `npm install`
- use `npm run start` to run locally

### FRONT END PLANNING, DEVELOPMENT PROCESS & PROBLEM SOLVING STRATEGIES

I started out the planning with back end rather than front end, more concerned with what resources and relationships I was going to have, rather than how to display those resources. I'd be using React, a new to me framework, on the front end, so in order to have as much time as possible for front end functionality, I knew my back end implementation needed to go quickly and smoothly. Once I had a good idea of what my Rails scaffold would look like, I began to review the React docs, with the goal of getting better handle on State, Hooks, and Components before starting to code.

I ran into the same problem while working on several of my Components: not knowing for certain exactly what element was rendering at what time, and what elements were accessible to me to manipulate at any given time. I added console logs to log the same parameters inside and outside JSX, to track the changes between renders. I also decided to build a small, simple Component, not for Deckard, but as practice. I built a very basic timer using React Hooks. Though the timer was intended as a study, not for use in my app, I ended up implementing a slightly improved and styled version of it as a feature in Deckard.


#### Front End Development Steps

- after deploying back end to Heroku, test CRUD actions on back end to make sure they were ready for front end implementation, using cURL and Postman
- create basic form for editing and creating Cards, and set up Card Create
- set up Decks and single Deck display
- add Update and Delete buttons to Cards, without functionality, to test User Authorization status
- add Card Delete functionality
- add Card Update, test functionality
- add basic Flip Card functionality in single Deck view
- add a dropdown to the Card form (populating and using the dropdown was one of the more challenging steps, and one of the reasons I built a basic Timer as a study)
- create separate Card container to load Cards into
- re-work Flip Card to work with Card container
- begin to add some Bootstrap and some CSS styling
- re-work and integrate the Timer
- create additional Landing/About page for logged out users, add tooltip(s)
- finish implementing Deck CRUD actions (with the exception of UPDATE)
- style all Components
- test deploy front-end client
- debug and clean-up console logs

### USER STORIES
- as a logged-out user, I’d like to view all the available flashcard subjects/decks and cards
- as a logged-out user, I’d like to be able to log in
- as a logged-in user, I’d like to be able to change my password
- as a logged-in user, I'd like to be able to view all the available decks and cards
- as a logged-in user, I'd like to be able to view my decks
- as a logged-in user, I’d like to be able to create a new subject/deck
- as a logged-in user, I’d like to be able to edit my deck(s)
- as a logged-in user, I’d like to be able to delete my deck(s)
- as a logged-in user, I’d like to be able to add a new card to a deck
- as a logged-in user, I’d like to be able to edit my card(s)
- as a logged-in user, I’d like to be able to delete my card(s)
- as a logged-in user, I’d like to be able to log out
### WIREFRAMES
#### SIGNED IN VIEW
<a href="https://imgur.com/FSngKXp"><img src="https://i.imgur.com/FSngKXp.png" title="signed in view" /></a>
#### CREATE NEW CARD VIEW
<a href="https://imgur.com/9ZUucGL"><img src="https://i.imgur.com/9ZUucGL.png" title="create new card" /></a>
### PLANNED FIXES AND FUTURE FEATURES
- refactor code for single Deck/Cards view to reduce/eliminate repetition 
- add Update functionality to Decks
- allow a user to view only their own decks
- allow a user to favorite cards or decks created by others, and to add others'
cards to their own decks
- better timer functionality
- ability to upload a list of decks and flashcards en masse (see .csv planned feature in back end repo)
#### ACKNOWLEDGEMENTS
Thank you to the students and instructors of SEI-05!
