# Faerie Path

# Description 
A website where users can create their own faeries with unique faerie powers!

## Introduction
Ever dreamed of making your own faeries? 

Welcome to Faerie Path, a Database for Spiritual Denizens! Faeriepath is an app that allows users to create, read, update, and delete their 'faerie' resources. Faerie resources include faerie names and faerie powers. The website uses React as a front-end framework, MongoDb as a database, and express and node as back-end frameworks. 

## Set Up Instructions
- Fork and clone this repository
- Change into directory
- Checkout to a new branch
- Run ``npm install`` in the command line
- Run ``npm start`` in the command line

## Project Planning 
-
-
-

## User Stories
1. Sign Up: If you're a first time user, sign up with your email and password.
2. Sign In: If you're already registered, congrats! Click 'Sign In.' Change your password if needed.
3. Creating a Profile: Create your own profile and make edits/delete if desired.
4. Game: Enter the game and play!
5. High Scores: View yours and others high scores.
  
- User will be able to sign up.
- User will be able to sign in, sign out and change password.
- User will create a profile and be able to edit/delete profile.
- User will be able to play the game.
- User will be able to view their high scores and others high scores.

## API Routes
### _Profile Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | /profiles       | read list of profiles| index or list    |
| GET           | /profiles/`:id` | read single profile  | show or retrieve |
| POST          | /profile        | create profile       | create           |
| PATCH         | /profiles/`:id` | update profile       | update           |
| DELETE        | /profiles/`:id` | delete profile       | destroy          |

### _Score Routes_

| HTTP Method   | URL Path        | Result               | Action           |
|:--------------|:----------------|:---------------------|:-----------------|
| GET           | /scores         | read list of scores  | index scores     |
| POST          | /scores         | adds score to list   | adds score       |

## Technologies Used

|    Libraries      | Languages        | Frameworks              | Database          | Version Control
|:-----------------------------------------|:----------------|:---------------------|:-----------------|:-----------------|
| [React.js](https://reactjs.org/)       |    [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)        |  [Express](https://expressjs.com/) | [MongoDB](https://www.mongodb.com/)   | [GitHub](https://github.com/) |[Javascript](https://www.javascript.com/)          | [BootStrap](https://getbootstrap.com/)       |           |
|  [Axios](https://www.npmjs.com/package/axios)         | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)          |        |          |
|    [Mongoose](https://mongoosejs.com/)        |           |        |         |
|          |          |       |         |
### Entity Relationship Diagram
![ERDbrick.png](ERDbrick.png)

### Wireframe
![wireframe.png](wireframe.png)
https://photos.app.goo.gl/PkeRm6bAVtC3w9aRA

### Opportunities for Future Iterations
I plan on spending the summer Working towards making this a database to share my faerie knowledge with the world. I hope to create an interactive choose your own adventure game with the faeries users create

### [Link to Back End Repo](https://github.com/rebeccafoltin/express-api-faerie)
### Links to Deployed Sites:
- [Link to the API Deployed](https://stormy-fortress-08010.herokuapp.com/)
- [Link to the Client Deployed](https://rebeccafoltin.github.io/faerie-path-react-front/)
Set Up Instructions
Fork and clone this repository
Change into directory
Checkout to a new branch
Run npm install in the command line
Run npm start in the command line