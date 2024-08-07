// Import the neccessary packages
const express = require("express");
const apiMiddleware = require("./middleware/apiMiddleware");
const bodyParser = require("body-parser");

// Import all the routes
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

// Use the login route
app.use(loginRoute);

// Export the express app
module.exports = app;