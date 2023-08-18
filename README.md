 AlmaBetter Backend Project - Capstone Projects

|| Get_Youtube_Subscribers ||

This is a simple backend project called "Almabetter Backend Capstone Project - Get YouTube Subscribers,"that contains a RESTful API for getting information about YouTube channel subscribers. The project is a backend application developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, and Subscribed Channels.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

The project can be set up and tested using the following steps:

1. Clone or download the project files and open them in a code editor like Visual Studio Code.
2. Install the necessary dependencies by running the command "npm install" in the terminal of Visual Studio Code.
3. Start the backend server by running the command "node src/index.js" in the terminal.
4. Create a new cluster on MongoDB Cloud and replace the "DATABASE_URL" in the project files with the URL of your new cluster.
5. Run the command "node src/createDatabase.js" in the terminal to populate the database with static data.


>> || API Endpoints ||

1. "/ " --> This default route will render the "index.html file" when the app launches. http://localhost:3000/

2. "/subscribers " --> This endpoint returns an array of all subscribers in the database. http://localhost:3000/subscribers

3. "/subscribers/names " --> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:3000/subscribers/names

4. "/subscribers/:id " --> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:3000/subscribers/:id


>> || Application Folder Structure ||

1. [src/app.js] ---> For handling requests and responses.
2. [/index.js] ---> To connect and start the server.
3. [src/createDatabase.js] ---> To create database on MongoDB.
4. [src/data.js] ---> Data that has to be connnected to a database.
5. [src/models/subscribers.js] ---> For the schema.  
6. [src/index.html] ---> The home page for the application.


>> || Installation ||

You'll need to have Node.js and MongoDB installed on your computer in order to begin working on the project. 
Once installed, Clone this repository to your local machine.
Install the required dependencies as mentioned below by using npm install "packageName".
Start the server by nodemon index.js

>> || Dependencies ||

Following dependencies needed to run this application: 
1. express
2. mongoose
3. nodemon

>> || Deployment ||

To deploy this project, the Render platform is used. You can search for Render in Google to find more information about it.Render is a bascially a free web services platform.

Visit to see the working on Youtube : 

Web Deployment :  

Author- Deeti Yadav

