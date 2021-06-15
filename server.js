const jsonServer = require('json-server')
const server = jsonServer.create()
const express = require('express');
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(express.static('build'));
server.use(middlewares);
server.use('/api', router);
server.listen(PORT, () => {
  console.log('JSON Server is running')
});