const {
  createRouter,
  logRequestHandler,
  urlParserHandler,
  notFoundHandler } = require('myserver');
const { serveFileContent } = require('./handlers/fileHandler.js');
const { handleGuestBook } = require('./handlers/guestBookHandler.js');
const { loadCommentsHandler } = require('./handlers/loadComments.js');
const { parseBodyParams } = require('./handlers/parseBodyParamsHandler.js');

const connectHandlers = ({ resourceRoot, dbPath }) => {
  const handlers = [
    logRequestHandler,
    urlParserHandler,
    loadCommentsHandler(dbPath),
    parseBodyParams,
    handleGuestBook,
    serveFileContent(resourceRoot),
    notFoundHandler
  ];

  return createRouter(handlers);
};

module.exports = { connectHandlers };
