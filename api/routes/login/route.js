// Import the neccessary packages
const express = require("express");
const router = express.Router();
const {Pool} = require("pg");
const { request } = require("../../middleware/apiMiddleware");

// Create a new postgresql connection pool
const pool = new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

// Configure a route to check database connection
router.get("/database/connection/test", (request, response) => {

    // Create a query pool
    pool("SELECT version()", (error, queryResponse) => {
        if (error) {
            throw new error
        } else {
            response.status(200).json({
                response: {
                    message: "Database connection has been established successfully!"
                }
            });
        }
    });
});

// Configure a route to handle login requests
router.post("/auth/login", (request, response) => {

    // Fetch userId and password from the request body
    const {userId, password} = request.body;
    response.status(200).json({
        message: {
            userId: userId,
            password: password
        }
    });
});

// Export the login route
module.exports = router;