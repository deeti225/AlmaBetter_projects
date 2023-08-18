//This file is used for handling API requests and responses

// Import the Express framework
// Import the path module for working with file paths
const express = require("express"); 
const path = require("path");

//SCHEMA
// Import the subscriber model
const schema = require("./models/subscribers");
// Import the 'error' object
const { error } = require("console"); 
// Create an Express application
const app = express();

//PARSE INCOMING JSON DATA
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

//HOME PAGE
// Serve index.html file as the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//THIS ROUTE SHOWS ALL THE SUBSCRIBERS LIST WITH DETAILS
app.get("/subscribers", async (req, res, next) => {
  try {
    // Retrieve all subscribers from the schema/model
    let subscribers = await schema.find(); 
     // Send the subscribers as a JSON response with a status of 200 (OK)
    res.status(200).json(subscribers);
  } catch (err) {
    // Set the response status to 400 (Bad Request)
    res.status(400); 
    // Pass the error to the error handling middleware
    next(err); 
  }
});

//THIS ROUTE PROVIDES AN ARRAY OF ALL SUBSCRIBERS WITH ONLY TWO FIELDS, THEIR NAME AND SUBSCRIBED CHANNEL
app.get("/subscribers/names", async (req, res, next) => {
  try {
    // Retrieve subscribers with only the name and subscribedChannel fields from schema/model
    let subscribers = await schema.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    ); 
    // Send the subscribers as a JSON response with a status of 200 (OK)
    res.status(200).json(subscribers); 
  } catch (err) {
    // Set the response status to 400 (Bad Request)
    res.status(400); 
    // Pass the error to the error handling middleware
    next(err);
  }
});

// THIS ROUTE PROVIDES THE DETAILS OF SUBSCRIBER WITH THE GIVEN ID.
app.get("/subscribers/:id", async (req, res) => {
  try {
    // Extract the ID parameter from the request URL
    const id = req.params.id; 
    if (!id) {
      // Send a JSON response with a status of 400 (Bad Request)
      res.status(400).json({ message: "No ID provided" }); 
      return;
    }
    // Find a subscriber with the given ID in the schema/model
    const subscriber = await schema.findById(id); 
    if (!subscriber) {
      // Send a JSON response with a status of 404 (Not Found)
      res.status(404).json({ message: "Subscriber not found" }); 
      return;
    }
    // Send the subscriber details as the response
    res.send(subscriber); 
  } catch (error) {
    // Send a JSON response with a status of 400 (Bad Request)
    res.status(400).json({ message: error.message }); 
  }
});

// HANDLES ALL THE UNWANTED REQUESTS.
app.use((req, res) => {
  // Send a JSON response with a status of 404 (Not Found)
  res.status(404).json({ message: "Error - Route not found" }); 
});

module.exports = app; // Export the Express application
