// Import the neccessary packages
const express = require("express");
const router = express.Router();

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