//This file is used to connect to the databse and start the server

// Importing necessary modules
// Import Express module
const express = require("express"); 
// Import custom app module
const app = require("./src/app"); 
// Import Mongoose module
const mongoose = require("mongoose"); 
// Setting the port number
const port = process.env.port || 3000;


// Middleware to parse JSON and URL-encoded bodies
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: false })); 


// Connecting to the database
const DATABASE_URL ="mongodb+srv://deeti22:Deeti2205yadav@cluster0.bulbh1u.mongodb.net/";

mongoose.connect(DATABASE_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

const dataBase = mongoose.connection;
// Handling database connection errors
dataBase.on("error", (err) => console.log(err)); 
// Logging in successful database connection
dataBase.once("open", () => console.log("connected to database")); 


// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`)); // Logging the server start and listening on the specified port
