//This file is used for creating database in MongoDB

// Import required dependencies
const mongoose = require("mongoose"); 
const subscriberModel = require("./models/subscribers"); 
const data = require("./data"); 

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://deeti22:Deeti2205yadav@cluster0.bulbh1u.mongodb.net/";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
});


// Get the database connection object
const dataBase = mongoose.connection; 
// Event listener for connection errors
dataBase.on("error", (err) => console.log(err)); 
// Event listener for successful connection
dataBase.once("open", () => console.log("Database created..."));


// Function to refresh data in the database
const refreshAll = async () => {
  // Delete all existing documents in the "subscribers" collection
  await subscriberModel.deleteMany({}); 
  // Insert new documents from the "data" array into the "subscribers" collection
  await subscriberModel.insertMany(data); 
  // Disconnect from the database
  await mongoose.disconnect(); 
};

refreshAll(); 