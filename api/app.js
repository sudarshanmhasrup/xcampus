// Import the neccessary packages
const express = require("express");

// Configure dotenv
require("dotenv").config();

// Configure the express app
const app = express();

app.get("/test", (request, response) => {
    response.status(200).json({
        
    });
});

// Export the express app
module.exports = app;