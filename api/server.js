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


// server.get('/', (req, res) => {
//     res.status(200).json({ api: 'up'});
// });

// server.get("/api/users", (req, res) => {
//     db.find()
//       .then(users => {
//         res.status(200).json(users);
//       })
//       .catch(error => {
//         console.log(error);   
//         res.status(500).json(error);
//       });
//   });
  
//   server.get("/api/users/:id", (req, res) => {
//     const id = req.params.id;
//     db.findById(id)
//       .then(user => {
//         res.status(200).json(user);
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json(error);
//       });
//   });
   
//   server.get("/api/users/:id/content", (req, res) => {
//     const id = req.params.id;
//     db.findById(id)
//       .then(user => {
//         res.status(200).json(user);
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json(error);
//       });
//   });


//   server.post("/api/users", (req, res) => {
//     if (!req.body.username) {
//       return res.status(422).send({ message: "missing username" });
//     } else if (!req.body.password) {
//       return res.status(422).send({ message: "missing password" });
//     } else if (!req.body.usertype) {
//       return res.status(422).send({ message: "missing usertype"});
//     } else {
//       db.add(req.body)
//         .then(games => {
//           res.status(201).json(games);
//         })
//         .catch(error => {
//           console.log(error);
//           res.status(500).json( {message: 'duplicate user', error });
//         });
//     }
//   });

//   server.delete("/api/users/:id", (req, res) => {
//     const id = req.params.id;
//     db.remove(id)
//       .then(user => {
//         res.status(200).json({message: `you have deleted user ${id}`});
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json(error);
//       });
//   });

//   server.put("/api/users/:id", (req, res) => {
//     const user = req.body;
//     const id = req.params.id;
//     db.update(user, id)
//       .where({ id })
//       .then(games => {
//         res.status(201).json(games);
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json(error);
//       });
//   });


server.get('/api/users', async (req, res) => {
  try {
    const users = await db.find('users'); 
    res.status(200).json(users);
  } catch (error) {
      console.log(error);
    res.status(500).json(error);
  }
});
server.get('/api/content', async (req, res) => {
  try {
    const content = await db.find('content'); 
    res.status(200).json(content);
  } catch (error) {
      console.log(error);
    res.status(500).json(error);
  }
});



server.post('/api/users', async (req, res) => {
try {
const users = await db.add(req.body)

res.status(201).json(users);
} catch (error) {
console.log(error);
res.status(500).json({ message: "Error adding users", error });
}
});

server.post('/api/content', async (req, res) => {
try {
const content = await db.add(req.body)

res.status(201).json(content);
} catch (error) {
console.log(error);
res.status(500).json({ message: "Error adding content", error });
}
});

server.get('/api/content/:id', async (req, res) => {
try {
const content = await db.findById('content')
  .where({ id: req.params.id })
  .first();
res.status(200).json(content);
} catch (error) {
  console.log(error);
  
res.status(500).json(error);
}
});

server.get('/api/users/:id', async (req, res) => {

  try {
    const users = await db.findById('users')
      .where({ id: req.params.id })
      .first();
      const content = await db.findBy('content')
      .where({id: req.params.id})
    res.status(200).json({ users, content});
  } catch (error) {
      console.log(error);
      
    res.status(500).json(error);
  }
});

server.get('/api/users/:id/content', async (req, res) => {
  try {
    const content = await db('content')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json(error);
  }
});



server.put('/api/users/:id', async (req, res) => {
  try {
    const count = await db(req.body)
      .where({ id: req.params.id });

    if (count > 0) {
      const users = await db('users')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(users);
    } else {
      res.status(404).json({ message: 'users not found' });
    }
  } catch (error) {}
});

server.put('/api/content/:id', async (req, res) => {
  try {
    const count = await db('content')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const content = await db('content')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(content);
    } else {
      res.status(404).json({ message: 'content not found' });
    }
  } catch (error) {
    console.log(error);
    
  }
});

server.delete('/api/users/:id', async (req, res) => {
  try {
    const count = await db('users')
      .where({ id: req.params.id })
      .truncate();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'users not found' });
    }
  } catch (error) {}
});

server.delete('/api/content/:id', async (req, res) => {
  try {
    const count = await db('content')
      .where({ id: req.params.id })
      .truncate();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'content not found' });
    }
  } catch (error) {
      console.log(error);
      
  }
});



module.exports = server;