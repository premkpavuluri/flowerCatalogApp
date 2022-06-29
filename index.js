const { startServer } = require('./src/server/server.js');
const { createRouter } = require('./src/app.js');

const router = createRouter(process.argv[2]);
startServer(80, router);
