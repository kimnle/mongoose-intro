// Purpose:
// Configure the server, eg.
// * routes
// * middleware
// * CORS
// * debug logger setups
// * connections to database
// * connections to file storage

const express = require("express");
const app = express();

// Server app configuration goes here
// middleware, routes, etc

// app.verb(path, callback);
app.get("/", (request, response) => {
    // response.send("<h1>Hello, world!!</h1>");

    response.json({
        message: "Hello world!!"
    });
});