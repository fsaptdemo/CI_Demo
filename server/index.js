const path = require("path");
const express = require("express");
const server = express();
const cors = require("cors");
//routers
const routes = require("./api");

//avoid cors erros
server.use(cors());

//body parsers
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//routes
server.use("/api", routes);

// static middleware
server.use("/dist", express.static(path.join(__dirname, "../dist")));
server.use(express.static(path.join(__dirname, "../public")));

// Sends our index.html (the "single page" of our SPA)
server.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = server;
