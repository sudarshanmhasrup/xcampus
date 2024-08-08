// Import the neccessary packages
const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
require("dotenv").config();

// Create a new postgresql connection pool
const pool = new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
});

// Configure a route to check if the user's account exits in database
router.post("/auth/login/check-account-exist", (request, response) => {

    // Fetch the userID from the request body
    const userId = request.body.userId;

    // Ensure that the request body is not empty
    if (Object.keys(request.body).length == 0) {
        return response.status(401).json({
            response: {
                message: "Request denied!",
                reason: "The request body cannot be empty."
            }, status: 401
        });
    }

    // Run query to database
    pool.query("SELECT email_address FROM users WHERE email_address = $1", [userId], (error, queryResponse) => {
        if (error) {
            return response.status(500).json({
                response: {
                    message: "Database connection failed!",
                    reason: "An unexpected error has occured while fetching database.",
                    log: error
                },
                status: 500
            });
        } else {
            if (queryResponse.rowCount == 0) {
                return response.status(401).json({
                    response: {
                        message: "Login failed!",
                        reason: "Account not found.",
                        log: userId + ""
                    },
                    status: 401
                });
            } else {
                return response.status(200).json({
                    response: {
                        message: "Account exits!",
                    },
                    status: 200
                });
            }
        }
    });
});

// Configure a route to handle full login request
router.post("/auth/login", (request, response) => {

    // Fetch the userID and userPassword from the request body
    const { userId, userPassword } = request.body;

    // Ensure that the request body is not empty
    if (Object.keys(request.body).length == 0) {
        return response.status(401).json({
            response: {
                message: "Login Failed!",
                reason: "The request body cannot be empty."
            }, status: 401
        });
    }

    // Run query to database
    pool.query("SELECT * FROM users WHERE email_address = $1", [userId], (error, queryResponse) => {
        if (error) {
            return response.status(500).json({
                response: {
                    message: "Database connection failed!",
                    reason: "An unexpected error has occured while fetching database.",
                    log: error
                },
                status: 500
            });
        } else {
            if (queryResponse.rowCount == 0) {
                return response.status(401).json({
                    response: {
                        message: "Login failed!",
                        reason: "Account not found."
                    },
                    status: 401
                });
            } else {

                // Extract the user id and password from the database query
                const queryUserId = queryResponse.rows[0].email_address;
                const queryUserPassword = queryResponse.rows[0].password;

                // Check for the authentication validations
                if (userId == queryUserId && userPassword == queryUserPassword) {
                    return response.status(200).json({
                        response: {
                            message: "Logged in successfully!"
                        },
                        status: 200
                    });
                } else if (userId == queryUserId && userPassword != queryUserPassword) {
                    return response.status(200).json({
                        response: {
                            message: "Login failed!",
                            reason: "Invalid password."
                        },
                        status: 200
                    });
                }
            }
        }
    });
});


// Export the login route
module.exports = router;