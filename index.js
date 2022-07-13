const { startServer } = require('myserver');
const { connectHandlers } = require('./src/app.js');

const appConfig = {
  logOption: true,
  resourceRoot: './public',
  dbPath: './db/comments.json'
};

const app = connectHandlers(appConfig);

startServer(8000, app);
