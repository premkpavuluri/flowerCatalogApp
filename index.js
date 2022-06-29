const { startServer } = require('./src/server/server.js');
const { createRouter } = require('./src/app.js');

const resource = {
  path: process.argv[2],
  guestBook: []
}

const router = createRouter(resource);
startServer(80, router);
