# DevConnector
> A Social network app for developers built with **MERN** stack. Developers from all around the world can share their developer stories, interesting insights and grow together.
>
> Live demo [_here_](https://dev-connector-786.herokuapp.com/).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Contact](#contact)

## General Information
**DevConnector** is a developer-focused social platform that allows users to communicate with their peers and showcase their developer credentials. Users can create profiles (with detailed information on their technical skills, educational and work experience, and the user’s most recent GitHub repositories), view a list of all developers on the platform, and create posts that can be liked/unliked and commented on by other users. The Node.js/Express.js server features over 20 endpoints that handle authenticating users, Create/Read/Update/Delete operations for user validation (using the passport.js JSON Web Token strategy), profile and post data, and extensive input validation and error handling.

## Technologies Used
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)

## Features
- Users can create their unique profiles
- Users can add technical skills, educational and work experience to their personal profiles
- Users public GIT repositories are shown on their profile section 
- Users can create posts as well as like and comment on them 
- Users gravatar picture as shown as default 
- User can see other developers work and stories


## Screenshots
![Home Page](https://res.cloudinary.com/humayoncloud/image/upload/v1641583017/git/devconnector/dev_connector_home_xgdh4s.png)

![Profile](https://res.cloudinary.com/humayoncloud/image/upload/v1641583013/git/devconnector/devconnect-1_nzsvkk.png)

![Post](https://res.cloudinary.com/humayoncloud/image/upload/v1641583295/git/devconnector/devconnector-3_ejznmu.png)

## Setup
Clone the project using:

### `git clone https://github.com/humayonzafar/dev_connector.git`

Install the dependencies using for the node server:

### `npm install`

Similarly, for front end app go to client folder and install to install the dependencies using:

### `npm install`

Next you need to setup the config file for the project. Create a **default.json** file under config and you can find the repective keys which the project needs under **example.json** copy them over to default.json.  

Set your mongodb url either local or on cloud under **mongoURI**.

Set your jwtSecret string for tokens under **jwtSecret**. 

Get an **API key** from [Github](https://github.com/) and set the keys client **gitClient** and secrets keys **gitSecret** in config accordingly. 

And voila, you are all set.

## Contact
Created by [@humayonzafar](https://www.humayonzafar.com/) - feel free to contact me!

## License

[MIT](LICENSE)