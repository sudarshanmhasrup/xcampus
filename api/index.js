// Import neccessary packages
const http = require("http");

// Server configuration
const server = http.createServer();
const port = process.env.API_PORT;
server.listen(port, () => {
    console.log(`The API is live at http://localhost:${port}`);
});