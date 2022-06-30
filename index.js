const { startServer } = require('./src/server/server.js');
const { createRouter } = require('./src/app.js');

const resource = {
  resourceRoot: process.argv[2],
  dbPath: './db/comments.json'
};

const router = createRouter(resource);
startServer(80, router);
