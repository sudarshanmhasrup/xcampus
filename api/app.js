// Import the neccessary packages
const express = require("express");
const apiMiddleware = require("./middleware/apiMiddleware");
const bodyParser = require("body-parser");

// Import all the routes
const databaseConnection = require("./routes/database-connection/route")
const loginRoute = require("./routes/login/route");

// Configure dotenv
require("dotenv").config();

// Configure the express app
const app = express();

// Configure the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use the api middleware
app.use(apiMiddleware);

// Connection successful message
app.get("/", (request, response) => {
    response.status(200).json({
        response: {
            message: "API connection established successfully!"
        },
        status: 200
    });
});

// Use all the routes
app.use(loginRoute);
app.use(databaseConnection);

// Catch errors
app.use((request, response, next) => {
    const error = new Error("URL not found!");
    error.status = 404;
    error.reason = "The request URL does not exits!"
    next(error);
});

// Handle erros
app.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        response: {
            message: error.message,
            reason: error.reason || "Unspecified error reason."
        },
        status: error.status || 500
    });
});

// Export the express app
module.exports = app;