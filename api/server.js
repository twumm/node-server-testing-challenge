const express = require('express');
const Users = require('../api/users/usersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res
    .status(200)
    .json({ content: 'up' });
})

server.get('/api/users', async (req, res) => {
  Users.getAll()
    .then(users => {
      res
        .status(200)
        .json(users);
    })
    .catch(error => {
      const err = {
        message: error.message,
        stack: error.stack,
      };
      res.status(500).json(err);
    });
})

module.exports = server;
