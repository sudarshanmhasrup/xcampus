// Import the neccessary packages
const express = require("express");
const apiMiddleware = require("./middleware/apiMiddleware");

// Configure dotenv
require("dotenv").config();

// Configure the express app
const app = express();

// Use the api middleware
app.use(apiMiddleware);

// API middlware setup
app.use((response, request, next) => {
    
    // Check for the API key in the request header
    const requestApiKey = request.header("x-api-key");

    // Check for authentication
    if (requestApiKey !== process.env.API_KEY) {
        return response.status(500).json({
            response: {
                message: "Access denied!",
                reason: "Unauthorized access."
            },
            status: 500
        });
    }
});

// Connection successful message
app.get("/", (request, response) => {
    response.status(200).json({
        response: {
            message: "API connection established successfully!"
        },
        status: 200
    });
});

// Export the express app
module.exports = app;