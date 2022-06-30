const { createRoutes } = require('./server/router.js');
const { serveFileContent } = require('./handlers/fileHandler.js');
const { notFoundHandler } = require('./handlers/notFoundHandler.js');
const { handleGuestBook } = require('./handlers/guestBookHandler.js');
const { loadCommentsHandler } = require('./handlers/loadComments.js');
const { urlParserHandler } = require('./handlers/urlParserHandler.js');
const { catalogsRouter } = require('./api/catalogsRouter.js');
const { commentsRouter } = require('./api/commentsRouter.js');
const { logRequestHandler } = require('./handlers/logRequestHandler.js');

const createRouter = ({ path, dbPath }) => {
  const handlers = [
    logRequestHandler,
    urlParserHandler,
    catalogsRouter,
    commentsRouter,
    loadCommentsHandler(dbPath),
    handleGuestBook,
    serveFileContent(path),
    notFoundHandler
  ];

  return createRoutes(handlers);
};

module.exports = { createRouter };
