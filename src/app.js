const {
  createRouter,
  logRequestHandler,
  urlParserHandler,
  notFoundHandler,
  serveFileContent } = require('myserver');

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
