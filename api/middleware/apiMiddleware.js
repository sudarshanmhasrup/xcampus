// Import the neccessary packages
const express = require("express");
const app = express();

// API middlware setup
app.use((request, response, next) => {

    // Check for the API key in the request header
    const requestApiKey = request.header("x-api-key");

    // Check for authentication
    if (requestApiKey !== process.env.API_KEY) {
        return response.status(401).json({
            response: {
                message: "Access denied!",
                reason: "Unauthorized access."
            },
            status: 401
        });
    } else {
        next();
    }
});

// Export the api middleware
module.exports = app;