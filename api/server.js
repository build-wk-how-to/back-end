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
  


  
  server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    db.findById(id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });
   
  server.post("/api/users", (req, res) => {
    if (!req.body.username) {
      return res.status(422).send({ message: "missing username" });
    } else if (!req.body.password) {
      return res.status(422).send({ message: "missing password" });
    } else if (!req.body.usertype) {
      return res.status(422).send({ message: "missing usertype"});
    } else {
      db.add(req.body)
        .then(games => {
          res.status(201).json(games);
        })
        .catch(error => {
          console.log(error);
          res.status(500).json( {message: 'duplicate user', error });
        });
    }
  });

  server.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    db.remove(id)
      .then(user => {
        res.status(200).json({message: `you have deleted user ${id}`});
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });

  server.put("/api/users/:id", (req, res) => {
    const user = req.body;
    const id = req.params.id;
    db.update(user, id)
      .where({ id })
      .then(games => {
        res.status(201).json(games);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
  });

module.exports = server;