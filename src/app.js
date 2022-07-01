const {
  createRouter,
  logRequestHandler,
  urlParserHandler,
  notFoundHandler } = require('myserver');
const { serveFileContent } = require('./handlers/fileHandler.js');

const connectHandlers = ({ resourceRoot, dbPath }) => {
  const handlers = [
    logRequestHandler,
    urlParserHandler,
    serveFileContent(resourceRoot),
    notFoundHandler
  ];

  return createRouter(handlers);
};

module.exports = { connectHandlers };
