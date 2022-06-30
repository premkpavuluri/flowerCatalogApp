const { createRoutes } = require('./server/router.js');
const { serveFileContent } = require('./handlers/fileHandler.js');
const { notFoundHandler } = require('./handlers/notFoundHandler.js');
const { handleGuestBook } = require('./handlers/guestBookHandler.js');
const { loadCommentsHandler } = require('./handlers/loadComments.js');
const { urlParserHandler } = require('./handlers/urlParserHandler.js');
const { logRequestHandler } = require('./handlers/logRequestHandler.js');
const { apiRouter } = require('./api/apiRouter.js');
const { loadApiDataRouter } = require('./api/loadApiDataHandler.js');

const createRouter = ({ resourceRoot, dbPath }) => {
  const handlers = [
    logRequestHandler,
    urlParserHandler,
    loadCommentsHandler(dbPath),
    loadApiDataRouter,
    apiRouter,
    handleGuestBook,
    serveFileContent(resourceRoot),
    notFoundHandler
  ];

  return createRoutes(handlers);
};

module.exports = { createRouter };
