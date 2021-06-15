const jsonServer = require('json-server')
const server = jsonServer.create()
const express = require('express');
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

server.use(express.static('build'));
server.use(middlewares);
server.use('/api', router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});