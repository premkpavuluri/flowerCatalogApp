const {
  createRouter,
  urlParserHandler,
  notFoundHandler } = require('myserver');
const { logRequestHandler } = require('./handlers/logRequestHandler.js');
const { serveFileContent } = require('./handlers/fileHandler.js');
const { handleGuestBook } = require('./handlers/guestBookHandler.js');
const { loadCommentsHandler } = require('./handlers/loadComments.js');
const { parseBodyParams } = require('./handlers/parseBodyParamsHandler.js');

const connectHandlers = ({ logOption, resourceRoot, dbPath }) => {
  const handlers = [
    logRequestHandler(logOption),
    urlParserHandler,
    loadCommentsHandler(dbPath),
    parseBodyParams,
    handleGuestBook(dbPath),
    serveFileContent(resourceRoot),
    notFoundHandler
  ];

  return createRouter(handlers);
};

module.exports = { connectHandlers };
