const express = require('express');
const helmet = require('helmet');
// connection to the database
const db = require('./data/connection');

const server = express();

server.use(helmet());
server.use(express.json());

// GET 
server.get("/", (req, res) => {
    res.status(200).json({ api: "hello from car dealer api"})
});

// GET cars
server.get("/cars", (req, res) => {
    db('cars')
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ errorMessage: "could not retrieve cars at this time"}));
});

// POST
server.post("/cars", (req, res) => {
    // make sure all the required params are specified
    const newCar = req.body;
    if(!newCar.VIN || !newCar.make || !newCar.model || !newCar.mileage){
        res.status(400).json({ errorMessage: "Please fill out all the required fields"})
    } else {
        db('cars').insert(newCar)
        .then(response => res.status(201).json({ message: "car successfully added"}))
        .catch(error => res.status(500).json({ errorMessage: "could not add car at this time"}))
    }
});



module.exports = server;