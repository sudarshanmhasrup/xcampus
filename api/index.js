// Import neccessary packages
const http = require("http");

// Import the express app
const app = require("./app");

// Server configuration
const server = http.createServer(app);
const port = process.env.API_PORT;
server.listen(port, () => {
    console.log(`The API is live at http://localhost:${port}`);
});