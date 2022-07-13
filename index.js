const { startServer } = require('myserver');
const { connectHandlers } = require('./src/app.js');

const appConfig = {
  resourceRoot: './public',
  dbPath: './db/comments.json'
};

const app = connectHandlers(appConfig);

startServer(8000, app);
