require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./users/usersModel')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());


server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'});
});

server.get("/api/users", (req, res) => {
    db.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(error => {
        console.log(error);
        
        res.status(500).json(error);
      });
  });
  
  
   
module.exports = server;