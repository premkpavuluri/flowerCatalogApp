const { startServer } = require('myserver');
const { connectHandlers } = require('./src/app.js');

const resource = {
  resourceRoot: process.argv[2],
  dbPath: './db/comments.json'
};

const router = connectHandlers(resource);
startServer(8000, router);
