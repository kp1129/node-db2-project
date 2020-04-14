// import express, make a server, use middleware, make request handlers
const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "hello from car dealer api"})
});

module.exports = server;