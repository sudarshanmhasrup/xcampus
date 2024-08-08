// Import the neccessary packages
const express = require("express");
const router = express.Router();
const {Pool} = require("pg");
require("dotenv").config();

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
    pool.query("SELECT * FROM connection_test", (error, queryResponse) => {
        if (error) {
            response.status(500).json({
                response: {
                    message: "Database connection unsuccessful!",
                    reason: "Credentials not found."
                },
                status: 500
            });
        } else {
            response.status(200).json({
                response: {
                    message: "Database connection has been established successfully!"
                },
                status: 200
            });
        }
    });
});

// Export the database connection test route
module.exports = router;